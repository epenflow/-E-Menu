import type { TArrayFormField } from "../types";
import type { TSignInSchema } from "./types";

export const DEBOUNCES_MS: number = 500;
export const SIGN_IN_MUTATION_KEY: string[] = ["sign_in"];
export const AUTH_SESSION_KEY = "auth-session";
export const ONE_WEEK = 7 * 24 * 60 * 60 * 1_000;
export const AUTH_EXPIRES_AT = new Date(Date.now() + ONE_WEEK);
export const SIGN_IN_FIELD: TArrayFormField<TSignInSchema> = [
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
