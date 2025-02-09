import type React from "react";
import type { CellContext } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import type { User } from "~/lib/types";
import { useDeleteUser } from "~/lib/user/hook";

const UserManagementAction: React.FC<CellContext<User, unknown>> = ({
	row,
}) => {
	const { mutateAsync } = useDeleteUser(row.original.id, row.original.username);
	const copyUsername = () => {
		navigator.clipboard.writeText(row.original.username);
	};

	const deleteUser = async () => {
		await mutateAsync();
	};

	return (
		<AlertDialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only">Open Action</span>
						<MoreHorizontal />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem onClick={copyUsername}>
						Copy {row.original.username}
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<AlertDialogTrigger>
						<DropdownMenuItem>Delete {row.original.username}</DropdownMenuItem>
					</AlertDialogTrigger>
				</DropdownMenuContent>
			</DropdownMenu>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete{" "}
						{row.original.username}.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={deleteUser}>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default UserManagementAction;
