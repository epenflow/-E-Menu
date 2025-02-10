import type React from "react";
import type { CellContext } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import DeleteUserDialog, {
	DeleteUserAlertDialogTrigger,
} from "../dialog/delete-user-dialog";
import EditUserDialog, {
	EditUserDialogTrigger,
} from "../dialog/edit-user-dialog";
import type { User } from "~/lib/types";

const UserManagementAction: React.FC<CellContext<User, unknown>> = ({
	row,
}) => {
	return (
		<DeleteUserDialog user={row.original}>
			<EditUserDialog user={row.original}>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open Action</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(row.original.username)
							}>
							Copy {row.original.username}
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<EditUserDialogTrigger asChild>
							<DropdownMenuItem>Edit {row.original.username}</DropdownMenuItem>
						</EditUserDialogTrigger>

						<DeleteUserAlertDialogTrigger asChild>
							<DropdownMenuItem>
								Delete {row.original.username}
							</DropdownMenuItem>
						</DeleteUserAlertDialogTrigger>
					</DropdownMenuContent>
				</DropdownMenu>
			</EditUserDialog>
		</DeleteUserDialog>
	);
};

export default UserManagementAction;
