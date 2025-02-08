import { createRootRouteWithContext } from "@tanstack/react-router";

import Root from "~/components/layouts/root";

import type { RootRouteContext } from "~/lib/types";

export const Route = createRootRouteWithContext<RootRouteContext>()({
	component: Root,
});
