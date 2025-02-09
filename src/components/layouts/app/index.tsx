import { Outlet } from "@tanstack/react-router";

import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

import AppBar from "./app-bar";
import AppSidebar from "./app-sidebar";

const App = () => {
	return (
		<SidebarProvider className="bg-card">
			<AppSidebar />
			<SidebarInset>
				<AppBar />
				<Outlet />
			</SidebarInset>
		</SidebarProvider>
	);
};
export default App;
