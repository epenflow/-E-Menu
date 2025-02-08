import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/

export default defineConfig({
	plugins: [react(), TanStackRouterVite()],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src"),
			"~components": path.resolve(__dirname, "./src/components"),
			"~libs": path.resolve(__dirname, "./src/libs"),
		},
	},
});
