import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

import AppContainer from "~/components/layouts/app/app-container";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/components/ui/table";

import { USER_MANAGEMENT_COLUMNS, usersQueryOptions } from "~/lib/user";

export const Route = createFileRoute("/_private/dashboard/user")({
	component: RouteComponent,
	beforeLoad({ context: { query } }) {
		query.ensureQueryData(usersQueryOptions);
	},
});

function RouteComponent() {
	const {
		data: { data },
	} = useSuspenseQuery(usersQueryOptions);
	const table = useReactTable({
		data,
		columns: USER_MANAGEMENT_COLUMNS,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<AppContainer scrollable className="p-6">
			<div className="bg-card border rounded-xl">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getCoreRowModel().rows.length
							? table.getCoreRowModel().rows.map((row) => (
									<TableRow
										key={row.id}
										data-state={row.getIsSelected() && "selected"}>
										{row.getVisibleCells().map((ceil) => (
											<TableCell key={ceil.id}>
												{flexRender(
													ceil.column.columnDef.cell,
													ceil.getContext(),
												)}
											</TableCell>
										))}
									</TableRow>
								))
							: null}
					</TableBody>
				</Table>
			</div>
		</AppContainer>
	);
}
