import { formOptions } from "@tanstack/react-form";

import { DEBOUNCES_MS } from "./constant";
import { signInSchema } from "./schema";
import type { TSignInSchema } from "./types";

export const signInOptions = formOptions<TSignInSchema>({
	defaultValues: {
		password: "",
		username: "",
	},
	validators: {
		onChangeAsync: signInSchema,
		onChangeAsyncDebounceMs: DEBOUNCES_MS,
	},
});
