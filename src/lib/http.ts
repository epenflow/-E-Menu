import axios, {
	type AxiosHeaders,
	type AxiosInstance,
	type HeadersDefaults,
	type RawAxiosRequestHeaders,
} from "axios";

import env from "./env";
import { assertIsDefined } from "./utils";

const baseURL = env.VITE_BASE_URL ?? "localhost:3333";
const http: AxiosInstance = axios.create({
	baseURL,
	headers: {},
});
export default http;

export function headers():
	| RawAxiosRequestHeaders
	| AxiosHeaders
	| Partial<HeadersDefaults> {
	const token: string | undefined = "";

	assertIsDefined(token);

	return {
		Authorization: `Bearer ${token}`,
	};
}
