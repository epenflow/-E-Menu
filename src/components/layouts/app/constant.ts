import { ChartPie, ShoppingCart, User } from "lucide-react";

import type { TSidebar, TSidebarContentWithRole } from "./types";

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
	CASHIER: ["orders", "users"],
};
export const DEFAULT_ERROR_MESSAGE = "An unexpected error occurred.";
