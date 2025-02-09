import type React from "react";
import type { AxiosError } from "axios";
import { ChartPie, ShoppingCart, User } from "lucide-react";

import AppErrorActions from "./app-error/actions";
import AppErrorBody from "./app-error/body";
import type { TSidebar, TSidebarContentWithRole } from "./types";
import type { THttpException } from "~/lib/types";

export const SIDEBAR_CONTENT: Array<TSidebar<"overview" | "orders" | "users">> =
	[
		{
			to: "/",
			label: "Overview",
			key: "overview",
			icon: ChartPie,
		},
		{
			to: "/",
			label: "Orders",
			key: "orders",
			icon: ShoppingCart,
		},
		{
			to: "/dashboard/user",
			label: "User Management",
			key: "users",
			icon: User,
		},
	];

export const SIDEBAR_CONTENT_WITH_ROLE: TSidebarContentWithRole = {
	ADMIN: ["orders", "overview", "users"],
	CASHIER: ["orders"],
};
export const DEFAULT_ERROR_MESSAGE = "An unexpected error occurred.";

export const APP_AXIOS_ERRORS: Record<
	number,
	React.FC<{ error: AxiosError; reset(): void }>
> = {
	401: ({ error, reset }) => {
		const $exception = error.response?.data as THttpException | undefined;

		return (
			<>
				<AppErrorBody>
					<p>
						{$exception?.errors
							?.map((response) => response.message)
							.join(", ") || DEFAULT_ERROR_MESSAGE}
					</p>
					<p>{error.message}</p>
				</AppErrorBody>
				<AppErrorActions reset={reset} isRestart />
			</>
		);
	},
};
