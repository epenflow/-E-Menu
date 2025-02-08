import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { useAuthStore } from "./lib/auth";
import env from "~/lib/env";
import router, { query } from "~/lib/router";

const App: React.FC = () => {
	const RenderComponent = () => {
		const auth = useAuthStore();

		return (
			<QueryClientProvider client={query}>
				<RouterProvider router={router({ auth })} />
			</QueryClientProvider>
		);
	};

	return env.MODE === "production" ? (
		<RenderComponent />
	) : (
		<React.StrictMode>
			<RenderComponent />
		</React.StrictMode>
	);
};
export default App;
