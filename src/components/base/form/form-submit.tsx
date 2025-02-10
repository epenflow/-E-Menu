import type { ReactFormExtendedApi, Validator } from "@tanstack/react-form";
import { Loader } from "lucide-react";

import { Button } from "~/components/ui/button";

const FormSubmit = <
	TFormData,
	TFormValidator extends Validator<TFormData | unknown> | undefined = undefined,
>({
	form,
}: {
	form: ReactFormExtendedApi<TFormData, TFormValidator>;
}) => {
	return (
		<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
			{([canSubmit, isSubmitting]) => (
				<Button type="submit" className="w-full" disabled={!canSubmit}>
					{isSubmitting ? <Loader className="animate-spin" /> : "Submit"}
				</Button>
			)}
		</form.Subscribe>
	);
};
export default FormSubmit;
