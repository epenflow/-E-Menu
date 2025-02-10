import type React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useForm } from "@tanstack/react-form";
import { Loader } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";

import Form from "../../form";
import { ROLES } from "~/lib/enum";
import type { User } from "~/lib/types";
import {
	EDIT_USER_FIELD,
	editUserFormOption,
	type TEditUserSchema,
} from "~/lib/user";
import { useEditUserMutation } from "~/lib/user/hook";

export const EditUserDialogTrigger = DialogPrimitive.Trigger;

const EditUserDialog: React.FC<
	React.PropsWithChildren & {
		user: User;
	}
> = ({ user, children }) => {
	const { mutateAsync } = useEditUserMutation();

	const form = useForm<TEditUserSchema>({
		...editUserFormOption,
		defaultValues: {
			username: user.username,
			role: user.role,
			password: undefined,
		},
		async onSubmit(formData) {
			try {
				await mutateAsync({ user, formData });
			} catch (error) {
				Promise.resolve(error);
			}
		},
	});

	return (
		<Dialog>
			{children}
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Edit {user.username}</DialogTitle>
					<DialogDescription>
						Make change to {user.username}. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<Form form={form} className="space-y-4">
					{EDIT_USER_FIELD.map((formField, key) => (
						<form.Field name={formField.name} key={key}>
							{(field) => (
								<div className="space-y-1">
									<Label htmlFor={formField.name}>{formField.label}</Label>
									<Input
										defaultValue={field.state.value}
										id={formField.name}
										type={formField.type}
										placeholder={formField.placeholder}
										autoComplete={formField.autoComplete}
										onChange={(event) =>
											field.handleChange(event.currentTarget.value)
										}
									/>
									<div className="text-xs font-medium">
										{field.state.meta.isTouched &&
										field.state.meta.errors.length ? (
											<span className="text-destructive">
												{field.state.meta.errors.join(",")}
											</span>
										) : (
											<span>{formField.description}</span>
										)}
									</div>
								</div>
							)}
						</form.Field>
					))}
					<form.Field name="role">
						{(field) => (
							<div className="space-y-1">
								<Label>Role</Label>
								<Select
									defaultValue={field.state.value}
									onValueChange={(select) => {
										field.handleChange(select as ROLES);
									}}>
									<SelectTrigger>
										<SelectValue placeholder="Select Role" />
									</SelectTrigger>
									<SelectContent>
										{Object.entries(ROLES).map(([key, role]) => (
											<SelectItem key={key} value={role}>
												{role}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						)}
					</form.Field>
					<form.Subscribe
						selector={(state) => [state.canSubmit, state.isSubmitting]}>
						{([canSubmit, isSubmitting]) => (
							<DialogClose asChild>
								<Button type="submit" className="w-full" disabled={!canSubmit}>
									{isSubmitting ? (
										<Loader className="animate-spin" />
									) : (
										"Submit"
									)}
								</Button>
							</DialogClose>
						)}
					</form.Subscribe>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
export default EditUserDialog;
