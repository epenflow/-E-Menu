import { createLazyFileRoute } from "@tanstack/react-router";

import { Button } from "~/components/ui/button";

export const Route = createLazyFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Button>ShadCN</Button>
		</div>
	);
}
