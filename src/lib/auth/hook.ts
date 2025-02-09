import { useForm, type FormOptions } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { useToast } from "~/hooks/use-toast";

import type { THttpException } from "../types";
import { cookiesStorage } from "../utils";
import {
	AUTH_EXPIRES_AT,
	AUTH_SESSION_KEY,
	SIGN_IN_MUTATION_KEY,
} from "./constant";
import { signInOptions } from "./option";
import { signInService } from "./service";
import type { TAuthStore, TSignInSchema } from "./types";

export const useAuthStore = create(
	persist<TAuthStore>(
		(set, get) => ({
			token: undefined,
			user: undefined,
			isAuthenticated() {
				const { token, user } = get();
				if (typeof token === "undefined" && typeof user === "undefined") {
					return false;
				}
				return true;
			},
			signIn({ token, user }) {
				if (typeof token !== "undefined" && typeof user !== "undefined") {
					set({
						user,
						token,
					});
				}
				set({ user, token });
			},
			signOut() {
				set({ user: undefined, token: undefined });
				Cookies.remove(AUTH_SESSION_KEY);
			},
		}),
		{
			name: AUTH_SESSION_KEY,
			storage: createJSONStorage(() =>
				cookiesStorage({
					secure: true,
					sameSite: "strict",
					expires: AUTH_EXPIRES_AT,
					path: "/",
				}),
			),
		},
	),
);

export function useSigInMutation() {
	const { toast } = useToast();
	const signIn = useAuthStore().signIn;

	return useMutation({
		mutationKey: SIGN_IN_MUTATION_KEY,
		mutationFn: signInService,

		onSuccess({ data }) {
			signIn({ token: data.token, user: data.user });
		},

		onError(error) {
			if (error instanceof AxiosError) {
				const $exception: THttpException | undefined = error.response?.data;

				toast({
					title: "Error",
					description:
						$exception?.errors
							?.map((response) => response.message)
							.join(", ") || "An unexpected error occurred.",
					variant: "destructive",
				});
			} else {
				toast({
					title: "Error",
					description: "An unexpected error occurred.",
					variant: "destructive",
				});
			}
		},
	});
}

export function useSignInForm(opts?: FormOptions<TSignInSchema>) {
	const { mutateAsync } = useSigInMutation();

	return useForm<TSignInSchema>({
		...signInOptions,
		async onSubmit(data) {
			try {
				await mutateAsync(data);
			} catch (error) {
				Promise.resolve(error);
			}
		},
		...opts,
	});
}
