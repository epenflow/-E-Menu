import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { useToast } from "~/hooks/use-toast";

import type { THttpException } from "../types";
import { USERS_QUERY_KEY } from "./constant";
import { deleteUserService, editUserService } from "./service";
import type { TUsersSuccess } from "./types";

export function useDeleteUserMutation() {
	const query = useQueryClient();
	const { toast } = useToast();

	return useMutation({
		mutationFn: deleteUserService,
		async onMutate() {
			await query.cancelQueries({ queryKey: USERS_QUERY_KEY.all });
		},
		onSuccess(_, variable) {
			toast({
				title: "Success",
				description: variable.username
					? `Delete ${variable.username} successfully`
					: "Delete user successfully",
			});
		},
		onError() {
			toast({
				variant: "destructive",
				title: "Error",
				description: "An unexpected error occurred.",
			});
			query.invalidateQueries({ queryKey: USERS_QUERY_KEY.all });
		},
		onSettled() {
			query.invalidateQueries({ queryKey: USERS_QUERY_KEY.all });
		},
	});
}

export function useEditUserMutation() {
	const query = useQueryClient();
	const { toast } = useToast();

	return useMutation({
		mutationFn: editUserService,
		async onMutate(variables) {
			await query.cancelQueries({ queryKey: USERS_QUERY_KEY.all });
			variables.formData.formApi.reset();
		},

		onSuccess(data, variables) {
			const currentData = query.getQueryData<TUsersSuccess>(
				USERS_QUERY_KEY.all,
			);

			if (currentData?.data) {
				const updatedData = currentData.data.map((user) =>
					user.id === data.id ? data : user,
				);

				const updater: TUsersSuccess = {
					...currentData,
					data: updatedData,
				};

				query.setQueryData(USERS_QUERY_KEY.all, updater, {
					updatedAt: Date.now(),
				});
			}
			toast({
				title: "Success",
				description: `Updated ${variables.user.username} successfully`,
			});
		},

		onError(error) {
			if (error instanceof AxiosError) {
				const exceptions: THttpException | undefined = error.response?.data;
				toast({
					title: "Error",
					variant: "destructive",
					description:
						exceptions?.errors
							.map((exception) => exception.message)
							.join(", ") || "An unexpected error occurred.",
				});
			} else {
				toast({
					title: "Error",
					variant: "destructive",
					description: "An unexpected error occurred.",
				});
			}
		},
	});
}
