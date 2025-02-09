import React from "react";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { AxiosError } from "axios";

import { APP_AXIOS_ERRORS } from "../constant";
import AppErrorActions from "./actions";
import AppErrorBody from "./body";
import AppErrorContainer from "./container";
import AppErrorHeader from "./header";

const AppErrors: React.FC<ErrorComponentProps> = ({ error, reset }) => {
	if (error instanceof AxiosError && error.status) {
		const AppAxiosError = APP_AXIOS_ERRORS[error.status];
		return (
			<AppErrorContainer>
				<AppErrorHeader />
				<AppAxiosError error={error} reset={reset} />
			</AppErrorContainer>
		);
	}

	return (
		<AppErrorContainer>
			<AppErrorHeader />
			<AppErrorBody>
				<p>{error.name}</p>
				<p>{error.message}</p>
				<p>{error.stack}</p>
			</AppErrorBody>
			<AppErrorActions reset={reset} />
		</AppErrorContainer>
	);
};
export default AppErrors;
