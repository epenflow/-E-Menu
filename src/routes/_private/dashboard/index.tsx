import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/dashboard/")({
	component: () => {
		return <div>index</div>;
	},
});
