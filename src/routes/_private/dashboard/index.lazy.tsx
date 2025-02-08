import { createLazyFileRoute } from "@tanstack/react-router";

import App from "~/components/layouts/app";

export const Route = createLazyFileRoute("/_private/dashboard/")({
	component: App,
});
