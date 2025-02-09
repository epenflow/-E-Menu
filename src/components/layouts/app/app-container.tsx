import React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { ScrollArea } from "~/components/ui/scroll-area";

import { cn } from "~/lib/utils";

const AppContainer: React.FC<
	React.ComponentPropsWithRef<typeof ScrollAreaPrimitive.Root> & {
		scrollable?: boolean;
	}
> = ({ scrollable, style, className, ...rest }) => {
	const CSSVariables = {
		"--app-bar-offset": "calc(2.5rem + calc(0.5rem * 2) + 1px)",
		"--app-container-height": "calc(100dvh - var(--app-bar-offset))",
	} as React.CSSProperties;

	return scrollable ? (
		<ScrollArea
			{...rest}
			style={{
				...style,
				...CSSVariables,
			}}
			className={cn("h-[--app-container-height]", className)}
		/>
	) : (
		<div
			{...rest}
			style={{
				...style,
				...CSSVariables,
			}}
			className={cn("h-[--app-container-height]", className)}
		/>
	);
};
export default AppContainer;
