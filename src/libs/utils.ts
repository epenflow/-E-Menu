import React from "react";
import { clsx, type ClassValue } from "clsx";
import Cookies from "js-cookie";
import { twMerge } from "tailwind-merge";
import type { StateStorage } from "zustand/middleware";

import type { CookieAttributes } from "./types";

export const withComponentMode = <T>({
	component,
	mode,
}: {
	component: React.FC<T>;
	mode: boolean;
}): React.FC<T> => {
	return mode ? () => null : component;
};

export function cookiesStorage(options?: CookieAttributes): StateStorage {
	return {
		setItem(name, value) {
			Cookies.set(name, value, options);
		},
		getItem(name) {
			const data = Cookies.get(name);
			return data ?? null;
		},
		removeItem(name) {
			Cookies.remove(name);
		},
	};
}

export function assertIsDefined<T>(
	data: T | null | undefined,
	message?: string,
): asserts data is Exclude<T, null | undefined> {
	if (typeof data === "undefined" || data === null)
		throw new Error(
			message ?? `Expected 'data' to be defined, but received ${data}`,
		);
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
