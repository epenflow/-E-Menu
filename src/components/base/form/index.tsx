import React, { type FormEvent } from "react";
import type { ReactFormExtendedApi, Validator } from "@tanstack/react-form";

import { cn } from "~/lib/utils";

const Form = <
	TFormData,
	TFormValidator extends Validator<TFormData, unknown> | undefined = undefined,
>({
	form,
	className,
	...rest
}: React.ComponentPropsWithRef<"form"> & {
	form: ReactFormExtendedApi<TFormData, TFormValidator>;
}) => {
	const onSubmit = React.useCallback(
		(event: FormEvent) => {
			event.preventDefault();
			event.stopPropagation();
			form.handleSubmit();
		},
		[form],
	);

	return <form {...rest} onSubmit={onSubmit} className={cn(className)} />;
};
export default Form;
