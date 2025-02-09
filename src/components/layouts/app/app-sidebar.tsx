import type React from "react";
import { Link } from "@tanstack/react-router";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "~/components/ui/sidebar";

import { getSidebarContentWithRole } from "./helpers";
import { useAuthStore } from "~/lib/auth";

const AppSidebar: React.FC = () => {
	const auth = useAuthStore();

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>content</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{getSidebarContentWithRole(auth.user?.role)?.map((content) => (
								<SidebarMenuItem key={content.key}>
									<SidebarMenuButton asChild>
										<Link to={content.to}>
											<content.icon />
											<span>{content.label}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

export default AppSidebar;
