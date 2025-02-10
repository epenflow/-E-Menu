import type React from "react";
import type { AxiosError } from "axios";

import type { THttpException } from "~/lib/types";
import { cn } from "~/lib/utils";

const ErrorWrapper: React.FC<React.ComponentPropsWithRef<"div">> = ({
	className,
	...rest
}) => {
	return (
		<div className="p-6">
			<div
				{...rest}
				className={cn(
					"bg-card p-4 border space-y-2 rounded-xl text-destructive",
					className,
				)}
			/>
		</div>
	);
};
interface ErrorProps {
	error: AxiosError;
}
const AuthorizationError: React.FC<ErrorProps> = ({ error }) => {
	const exceptions = error.response?.data as THttpException | undefined;
	return (
		<ErrorWrapper className="space-y-1">
			<h6 className="text-xl">{error.status}</h6>
			<p>
				{exceptions?.errors.map((exception) => exception.message).join(", ")}
			</p>
		</ErrorWrapper>
	);
};
const AppAxiosError: Record<number, React.FC<{ error: AxiosError }>> = {
	403: AuthorizationError,
	401: AuthorizationError,
};
export default AppAxiosError;
