import * as z from "zod";

import type { MetaPaginator, User } from "../types";
import type { editUserSchema } from "./schema";

export type TUsersSuccess = {
	meta: MetaPaginator;
	data: User[];
};
export type TEditUserSchema = z.infer<typeof editUserSchema>;
