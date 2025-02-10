import http from "../http";
import type { TFormData } from "../types";
import type { TSignInSchema, TSignSuccess } from "./types";

export async function signInService(formData: TFormData<TSignInSchema>) {
	const url = "/auth/sign_in";

	const { data } = await http.post<TSignSuccess>(url, {
		...formData.value,
	});

	return data;
}
