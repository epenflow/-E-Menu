import * as z from "zod";

import { ROLES } from "../enum";

export const editUserSchema = z.object({
	username: z.string().min(1, "Username is required").optional(),
	password: z.string().min(1, "Password is required").optional(),
	role: z.enum([ROLES.ADMIN, ROLES.CASHIER]).optional(),
});
