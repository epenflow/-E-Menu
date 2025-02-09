import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import AppErrors from "~/components/layouts/app/app-error";
import AppLoader from "~/components/layouts/app/app-loader";

import type { AuthContext } from "./auth";
import { routeTree } from "~/routeTree.gen";

export const query = new QueryClient();
interface RouterContext {
	auth: AuthContext;
}
function router({ auth }: RouterContext) {
	return createRouter({
		routeTree,
		context: {
			query,
			auth,
		},
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultPendingComponent: AppLoader,
		defaultErrorComponent: AppErrors,
		scrollRestoration: true,
	});
}

export default router;

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof router>;
	}
}
