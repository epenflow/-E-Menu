import { format } from "date-fns";

import UserManagementAction from "~/components/base/form/user/dropdown/user-management-action";

import { DATE_FORMAT_dd_MMMM_yyyy_hh_mm_b } from "../constant";
import { userColumnHelper } from "./helper";

export const userURL = "/user";
export const USERS_QUERY_KEY = {
	all: ["users"],
};

export const USER_MANAGEMENT_COLUMNS = [
	userColumnHelper.display({
		id: "index",
		header: "No",
		cell: (props) => props.row.index + 1,
	}),
	userColumnHelper.accessor("username", {
		header: "Username",
		cell: ({ getValue }) => getValue(),
	}),
	userColumnHelper.accessor("createdAt", {
		header: "Created At",
		cell: ({ getValue }) =>
			format(getValue(), DATE_FORMAT_dd_MMMM_yyyy_hh_mm_b),
	}),
	userColumnHelper.accessor("updatedAt", {
		header: "Updated At",
		cell: (props) => format(props.getValue(), DATE_FORMAT_dd_MMMM_yyyy_hh_mm_b),
	}),
	userColumnHelper.display({
		id: "action",
		header: "Action",
		cell: UserManagementAction,
	}),
];
