import { createFileRoute, redirect } from "@tanstack/react-router";

import App from "~/components/layouts/app";

export const Route = createFileRoute("/_private")({
	component: App,
	async beforeLoad({ context: { auth } }) {
		const $isAuthenticated = auth.isAuthenticated();

		if (!$isAuthenticated) {
			throw redirect({
				to: "/",
			});
		}
	},
});
