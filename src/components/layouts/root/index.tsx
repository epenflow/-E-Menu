import React from "react";
import { Outlet } from "@tanstack/react-router";
import type { Root } from "react-dom/client";

import { Toaster } from "~/components/ui/toaster";

import env from "~/lib/env";
import { withOptionalComponent } from "~/lib/utils";

const Root: React.FC = () => {
	const { TanstackQueryDevtools, TanstackRouterDevtools } = resources;

	return (
		<>
			<Outlet />
			<Toaster />
			<TanstackQueryDevtools />
			<TanstackRouterDevtools />
		</>
	);
};

export default Root;

const resources = {
	TanstackRouterDevtools: withOptionalComponent({
		component: React.lazy(() =>
			import("@tanstack/router-devtools").then((res) => ({
				default: res.TanStackRouterDevtools,
			})),
		),
		mode: env.PROD,
	}),
	TanstackQueryDevtools: withOptionalComponent({
		component: React.lazy(() =>
			import("@tanstack/react-query-devtools").then((res) => ({
				default: res.ReactQueryDevtools,
			})),
		),
		mode: env.PROD,
	}),
};
