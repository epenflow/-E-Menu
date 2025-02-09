import http, { headers } from "../http";
import type { User } from "../types";
import { userURL } from "./constant";
import type { TUsersSuccess } from "./types";

export async function usersService() {
	return await http.get<TUsersSuccess>(userURL, { headers: headers() });
}

export async function deleteUserService(data: User) {
	const url = userURL + "/" + data.id;
	return await http.delete(url, {
		headers: headers(),
	});
}
