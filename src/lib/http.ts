import axios, {
	type AxiosHeaders,
	type AxiosInstance,
	type Method,
	type RawAxiosRequestHeaders,
} from "axios";

import { useAuthStore } from "./auth";
import env from "./env";
import { assertIsDefined } from "./utils";

const baseURL = env.VITE_BASE_URL ?? "localhost:3333";
const http: AxiosInstance = axios.create({
	baseURL,
	headers: {},
});
export default http;

export function headers(): RawAxiosRequestHeaders &
	Partial<
		{
			[Key in Method as Lowercase<Key>]: AxiosHeaders;
		} & { common: AxiosHeaders }
	> {
	const token: string | undefined = useAuthStore.getState().token?.token;

	assertIsDefined(token);

	return {
		Authorization: `Bearer ${token}`,
	};
}
