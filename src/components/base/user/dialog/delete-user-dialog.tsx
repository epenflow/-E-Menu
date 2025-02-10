import React from "react";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
} from "~/components/ui/alert-dialog";

import type { User } from "~/lib/types";
import { useDeleteUserMutation } from "~/lib/user/hook";

export const DeleteUserAlertDialogTrigger = AlertDialogPrimitive.Trigger;

const DeleteUserDialog: React.FC<
	React.PropsWithChildren & {
		user: User;
	}
> = ({ user, children }) => {
	const { mutateAsync } = useDeleteUserMutation();
	const onClick = async () => {
		try {
			await mutateAsync(user);
		} catch (error) {
			Promise.resolve(error);
		}
	};

	return (
		<AlertDialog>
			{children}
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete{" "}
						{user.username}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={onClick}>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
export default DeleteUserDialog;
