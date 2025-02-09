import { cn } from "~/lib/utils";

const AppErrorContainer: React.FC<React.ComponentPropsWithRef<"div">> = ({
	className,
	...rest
}) => {
	return (
		<div className="text-destructive p-6">
			<div
				{...rest}
				className={cn("bg-card border rounded-xl space-y-4 p-4", className)}
			/>
		</div>
	);
};
export default AppErrorContainer;
