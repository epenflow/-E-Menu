import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
	component: () => {
		return (
			<>
				<nav>navbar</nav>
				<Outlet />
			</>
		);
	},
});
