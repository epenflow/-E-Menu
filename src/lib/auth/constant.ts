import type { TArrayFormField } from "../types";
import type { TSignInSchema } from "./types";

export const debounceMs: number = 500;
export const signInMutationKey: string[] = ["sign_in"];
export const authSessionKey = "auth-session";
export const oneWeek = 7 * 24 * 60 * 60 * 1_000;
export const authExpiresAt = new Date(Date.now() + oneWeek);
export const signInField: TArrayFormField<TSignInSchema> = [
	{
		name: "username",
		label: "Username",
		autoComplete: "username",
		type: "text",
		description: "Enter your username",
		placeholder: "john_doe",
	},
	{
		name: "password",
		label: "Password",
		autoComplete: "current-password",
		type: "password",
		description: "Enter your password",
		placeholder: "********",
	},
];
