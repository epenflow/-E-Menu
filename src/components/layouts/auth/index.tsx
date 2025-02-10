import React from "react";

import Form from "~/components/base/form";
import FormSubmit from "~/components/base/form/form-submit";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import { SIGN_IN_FIELD, useSignInForm } from "~/lib/auth";

const Auth: React.FC = () => {
	const form = useSignInForm();

	return (
		<div className="container h-dvh inline-flex items-center justify-center">
			<Form
				form={form}
				className="w-96 space-y-6 p-6 py-12 border bg-card rounded-xl">
				<div className="space-y-4">
					{SIGN_IN_FIELD.map((formField, key) => (
						<form.Field name={formField.name} key={key}>
							{(field) => (
								<div className="space-y-1">
									<Label htmlFor={formField.name}>{formField.label}</Label>
									<Input
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
				</div>
				<FormSubmit form={form} />
			</Form>
		</div>
	);
};
export default Auth;
