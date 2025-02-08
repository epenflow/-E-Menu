import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import Loader from "~/components/layouts/loader";

import { routeTree } from "~/routeTree.gen";

export const query = new QueryClient();
function router() {
	return createRouter({
		routeTree,
		context: {
			query,
		},
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultPendingComponent: Loader,
		scrollRestoration: true,
	});
}

export default router;

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof router>;
	}
}
