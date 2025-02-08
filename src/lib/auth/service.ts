import http from "../http";
import type { TFormData } from "../types";
import type { TSignInSchema, TSignSuccess } from "./types";

export async function signInService(data: TFormData<TSignInSchema>) {
	const url = "/auth/sign_in";

	return await http.post<TSignSuccess>(url, {
		...data.value,
	});
}
