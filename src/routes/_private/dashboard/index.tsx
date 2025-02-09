import { createFileRoute } from "@tanstack/react-router";

import AppContainer from "~/components/layouts/app/app-container";

export const Route = createFileRoute("/_private/dashboard/")({
	component: () => {
		return (
			<AppContainer scrollable>
				{Array.from({ length: 10 }).map((_, key) => (
					<div
						key={key}
						className="h-dvh w-full  inline-flex items-center justify-center text-7xl">
						{key}
					</div>
				))}
			</AppContainer>
		);
	},
});
