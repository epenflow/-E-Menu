import type { MetaPaginator, User } from "../types";

export type TUsersSuccess = {
	meta: MetaPaginator;
	data: User[];
};
