import React from "react";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { AxiosError } from "axios";

import { Separator } from "~/components/ui/separator";

import AppAxiosError from "./app-axios-error";

const AppError: React.FC<ErrorComponentProps> = ({ error, info }) => {
	if (error instanceof AxiosError && error.status) {
		console.log(error);
		const InnerAxiosError = AppAxiosError[error.status];

		return <InnerAxiosError error={error} />;
	}

	return (
		<div className="p-6">
			<div className="p-4 bg-card border rounded-xl space-y-2">
				<h5 className="font-medium text-2xl space-y-1">
					<span>Something went wrong!</span>
					<Separator />
				</h5>
				<div className="text-destructive">
					<h6 className="text-xl">{error.name}</h6>
					<p>{error.message}</p>
					<p>{error.stack}</p>
				</div>
				<p>{info?.componentStack}</p>
			</div>
		</div>
	);
};
export default AppError;
