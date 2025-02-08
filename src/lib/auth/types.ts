import * as z from "zod";

import type { ROLES } from "../enum";
import type { signInSchema } from "./schema";

export type TSignInSchema = z.infer<typeof signInSchema>;
export interface Token {
	type: string;
	name: string | null;
	token: string | undefined;
	abilities: string[];
	lastUsedAt: Date | null;
	expiresAt: Date | null;
}
interface User {
	id: string;
	username: string;
	role: ROLES;
	createdAt: Date;
	updatedAt: Date;
	isAdmin: boolean;
}
export type TSignSuccess = {
	user: User;
	token: Token;
};
export type TAuthStore = {
	token?: Token;
	user?: User;
	isAuthenticated(): boolean;
	signIn(data: { token?: Token; user?: User }): void;
	signOut(): void;
};
export type AuthContext = TAuthStore;
