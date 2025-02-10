import { format } from "date-fns";

import UserManagementAction from "~/components/base/user/dropdown/user-management-action";

import { DATE_FORMAT_dd_MMMM_yyyy_hh_mm_b } from "../constant";
import type { TArrayFormField } from "../types";
import { userColumnHelper } from "./helper";
import type { TEditUserSchema } from "./types";

export const USERS_QUERY_KEY = {
	all: ["users"],
};
export const userURL = "/user";
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
	userColumnHelper.accessor("role", {
		header: "Role",
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

export const EDIT_USER_FIELD: TArrayFormField<Omit<TEditUserSchema, "role">> = [
	{
		name: "username",
		label: "Username",
		autoComplete: "username",
		type: "text",
		placeholder: "Enter username",
		description: "Please enter the username 🧑‍💻",
	},
	{
		name: "password",
		label: "Password",
		autoComplete: "new-password",
		type: "password",
		placeholder: "Enter new password",
		description: "Please enter a new password 🔒",
	},
];
