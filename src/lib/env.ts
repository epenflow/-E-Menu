import * as z from "zod";

const env = z
	.object({
		BASE_URL: z.string(),
		DEV: z.boolean(),
		MODE: z.enum(["production", "development"]),
		PROD: z.boolean(),
		SSR: z.boolean(),
		VITE_BASE_URL: z.string().url().optional(),
	})
	.parse(import.meta.env);

export default env;
