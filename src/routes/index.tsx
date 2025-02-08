import { createFileRoute, redirect } from "@tanstack/react-router";

import Auth from "~/components/layouts/auth";

export const Route = createFileRoute("/")({
	component: Auth,
	async beforeLoad({ context: { auth } }) {
		const $isAuthenticated = auth.isAuthenticated();

		if ($isAuthenticated) {
			throw redirect({
				to: "/dashboard",
			});
		}
	},
});
