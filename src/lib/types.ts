import React from "react";
import type { DeepKeys, FormApi, Validator } from "@tanstack/react-form";
import type { QueryClient } from "@tanstack/react-query";

import type { AuthContext } from "./auth";
import type { ROLES } from "./enum";

export type TFormData<
	TFormData,
	TFormValidator extends Validator<TFormData, unknown> | undefined = undefined,
> = {
	value: TFormData;
	formApi: FormApi<TFormData, TFormValidator>;
};
export interface User {
	id: string;
	username: string;
	role: ROLES;
	createdAt: Date;
	updatedAt: Date;
	isAdmin: boolean;
}

export interface MetaPaginator {
	total: string;
	perPage: string;
	currentPage: string;
	lastPage: string;
	firstPage: string;
	firstPageUrl: string;
	lastPageUrl: string;
	nextPageUrl: string;
	previousPageUrl: string;
}
export type TFormField<TName> = {
	name: DeepKeys<TName>;
	label: string;
	type: React.HTMLInputTypeAttribute;
	autoComplete: React.HTMLInputAutoCompleteAttribute;
	description?: React.ReactNode;
	placeholder?: string;
};
export type TArrayFormField<TName> = Array<TFormField<TName>>;
export interface RootRouteContext {
	query: QueryClient;
	auth: AuthContext;
}
export type THttpException<TException = undefined> = {
	errors: Array<
		TException extends undefined
			? { message: string }
			: TException & { message: string }
	>;
};
export interface CookieAttributes {
	/**
	 * Define when the cookie will be removed. Value can be a Number
	 * which will be interpreted as days from time of creation or a
	 * Date instance. If omitted, the cookie becomes a session cookie.
	 */
	expires?: number | Date | undefined;

	/**
	 * Define the path where the cookie is available. Defaults to '/'
	 */
	path?: string | undefined;

	/**
	 * Define the domain where the cookie is available. Defaults to
	 * the domain of the page where the cookie was created.
	 */
	domain?: string | undefined;

	/**
	 * A Boolean indicating if the cookie transmission requires a
	 * secure protocol (https). Defaults to false.
	 */
	secure?: boolean | undefined;

	/**
	 * Asserts that a cookie must not be sent with cross-origin requests,
	 * providing some protection against cross-site request forgery
	 * attacks (CSRF)
	 */
	sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined;

	/**
	 * An attribute which will be serialized, conformably to RFC 6265
	 * section 5.2.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[property: string]: any;
}
