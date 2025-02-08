import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import env from "~/libs/env";
import router, { query } from "~/libs/router";

const App: React.FC = () => {
	const render = () => {
		return (
			<QueryClientProvider client={query}>
				<RouterProvider router={router()} />
			</QueryClientProvider>
		);
	};

	return env.MODE === "production" ? (
		render()
	) : (
		<React.StrictMode>{render()}</React.StrictMode>
	);
};
export default App;
