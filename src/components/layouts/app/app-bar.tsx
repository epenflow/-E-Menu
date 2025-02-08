import { Button } from "~/components/ui/button";

import { useAuthStore } from "~/lib/auth";
import { cn } from "~/lib/utils";

const AppBar = () => {
	const signOut = useAuthStore().signOut;

	return (
		<header
			className={cn(
				"min-h-10 h-auto w-full bg-card border-b",
				"inline-flex items-center",
			)}>
			<nav
				className={cn(
					"container py-2 box-content",
					"inline-flex items-center justify-between",
				)}>
				<h1>E-Menu</h1>
				<Button onClick={() => signOut()}>Sign-Out</Button>
			</nav>
		</header>
	);
};

export default AppBar;
