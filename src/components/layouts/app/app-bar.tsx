import { Button } from "~/components/ui/button";
import { SidebarTrigger } from "~/components/ui/sidebar";

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
					"py-2 box-content w-full px-4",
					"inline-flex items-center justify-between",
				)}>
				<SidebarTrigger />
				<Button onClick={() => signOut()}>Sign-Out</Button>
			</nav>
		</header>
	);
};

export default AppBar;
