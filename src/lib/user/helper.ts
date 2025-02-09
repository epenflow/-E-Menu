import { createColumnHelper } from "@tanstack/react-table";

import type { User } from "../types";

export const userColumnHelper = createColumnHelper<User>();
