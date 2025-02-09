import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";

import { useAuthStore } from "~/lib/auth";

const AppErrorActions: React.FC<{
	reset(): void;
	isRestart?: boolean;
}> = ({ reset, isRestart }) => {
	const auth = useAuthStore();
	function restart() {
		localStorage.clear();
		auth.signOut();
	}
	return (
		<div className="inline-flex gap-2">
			<Button onClick={reset}>Try Again</Button>
			{isRestart ? (
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button>Restart</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently reset your
								app and remove your current data.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction onClick={restart}>Continue</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			) : null}
		</div>
	);
};
export default AppErrorActions;
