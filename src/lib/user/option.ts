import { queryOptions } from "@tanstack/react-query";

import "@tanstack/react-table";

import { formOptions } from "@tanstack/react-form";

import { DEBOUNCE_MS } from "../constant";
import { USERS_QUERY_KEY } from "./constant";
import { editUserSchema } from "./schema";
import { usersService } from "./service";
import type { TEditUserSchema } from "./types";

export const usersQueryOptions = queryOptions({
	queryKey: USERS_QUERY_KEY.all,
	queryFn: usersService,
	refetchOnWindowFocus: false,
});
export const editUserFormOption = formOptions<TEditUserSchema>({
	validators: {
		onChangeAsync: editUserSchema,
		onChangeAsyncDebounceMs: DEBOUNCE_MS,
	},
});
