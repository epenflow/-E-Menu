import { queryOptions } from "@tanstack/react-query";

import "@tanstack/react-table";

import { USERS_QUERY_KEY } from "./constant";
import { usersService } from "./service";

export const usersOptions = queryOptions({
	queryKey: USERS_QUERY_KEY.all,
	queryFn: usersService,
});
