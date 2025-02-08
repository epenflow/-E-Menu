import { createRootRouteWithContext } from "@tanstack/react-router";

import type { RootRouteContext } from "~/libs/types";

import Root from "~/components/layouts/root";

export const Route = createRootRouteWithContext<RootRouteContext>()({
	component: Root,
});
