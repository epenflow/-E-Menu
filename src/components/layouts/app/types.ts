import { type LucideIcon } from "lucide-react";

import type { SIDEBAR_CONTENT } from "./constant";
import type { ROLES } from "~/lib/enum";
import * as RouteTypeGen from "~/routeTree.gen";

export type TSidebar<T = undefined> = {
	to: RouteTypeGen.FileRouteTypes["to"];
	key: T extends undefined ? string : T;
	icon: LucideIcon;
	label: string;
};
export type TSidebarContentWithRole = {
	[key in ROLES]?: Array<(typeof SIDEBAR_CONTENT)[number]["key"]>;
};
