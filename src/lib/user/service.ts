import type { QueryFunctionContext } from "@tanstack/react-query";

import http, { headers } from "../http";
import type { TFormData, User } from "../types";
import { userURL } from "./constant";
import type { TEditUserSchema, TUsersSuccess } from "./types";

export async function usersService(
	context: QueryFunctionContext,
): Promise<TUsersSuccess> {
	console.log(context);

	const { data } = await http.get<TUsersSuccess>(userURL, {
		headers: headers(),
	});
	return data;
}

export async function deleteUserService(data: User) {
	const url = userURL + "/" + data.id;
	return await http.delete(url, {
		headers: headers(),
	});
}

export async function editUserService(variables: {
	user: User;
	formData: TFormData<TEditUserSchema>;
}) {
	const { user, formData } = variables;
	const url = userURL + "/" + user.id;

	const { data: response } = await http.put<User>(url, formData.value, {
		headers: headers(),
	});
	return response;
}
