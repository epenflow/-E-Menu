import http, { headers } from "../http";
import type { TUsersSuccess } from "./types";

export async function usersService() {
	const url = "/user";

	return await http.get<TUsersSuccess>(url, { headers: headers() });
}
