import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import { routeTree } from "~/routeTree.gen";

export const query = new QueryClient();
function router() {
	return createRouter({
		routeTree,
		context: {
			query,
		},
	});
}

export default router;

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof router>;
	}
}
