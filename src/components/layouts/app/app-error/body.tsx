import type React from "react";

import { cn } from "~/lib/utils";

const AppErrorBody: React.FC<React.ComponentPropsWithRef<"div">> = ({
	className,
	...rest
}) => {
	return <div {...rest} className={cn("space-y-1", className)} />;
};
export default AppErrorBody;
