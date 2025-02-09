import { SIDEBAR_CONTENT, SIDEBAR_CONTENT_WITH_ROLE } from "./constant";
import type { ROLES } from "~/lib/enum";

export function getSidebarContentWithRole(roles?: ROLES) {
	if (!roles || !SIDEBAR_CONTENT_WITH_ROLE[roles]) {
		return SIDEBAR_CONTENT;
	}
	const allowKeys = SIDEBAR_CONTENT_WITH_ROLE[roles];

	return SIDEBAR_CONTENT.filter((content) => allowKeys.includes(content.key));
}
