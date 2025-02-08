import React from "react";
import { Outlet } from "@tanstack/react-router";
import type { Root } from "react-dom/client";

import env from "~/libs/env";
import { withComponentMode } from "~/libs/utils";

const Root: React.FC = () => {
	const { TanstackQueryDevtools, TanstackRouterDevtools } = resources;

	return (
		<>
			<Outlet />
			<TanstackQueryDevtools />
			<TanstackRouterDevtools />
		</>
	);
};

export default Root;

const resources = {
	TanstackRouterDevtools: withComponentMode({
		component: React.lazy(() =>
			import("@tanstack/router-devtools").then((res) => ({
				default: res.TanStackRouterDevtools,
			})),
		),
		mode: env.PROD,
	}),
	TanstackQueryDevtools: withComponentMode({
		component: React.lazy(() =>
			import("@tanstack/react-query-devtools").then((res) => ({
				default: res.ReactQueryDevtools,
			})),
		),
		mode: env.PROD,
	}),
};
