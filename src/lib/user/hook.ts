import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useToast } from "~/hooks/use-toast";

import http, { headers } from "../http";
import { USERS_QUERY_KEY } from "./constant";

export function useDeleteUser(id: string, username?: string) {
	const queryClient = useQueryClient();
	const { toast } = useToast();
	const service = async () => {
		const url = "/user/" + id;
		return await http.delete(url, {
			headers: headers(),
		});
	};

	return useMutation({
		mutationFn: service,
		onMutate: async () => {
			await queryClient.cancelQueries({ queryKey: USERS_QUERY_KEY.all });
		},
		onSuccess: () => {
			toast({
				title: "Success",
				description: username
					? `Delete ${username} successfully`
					: "Delete user successfully",
			});
		},
		onError: () => {
			toast({
				variant: "destructive",
				title: "Error",
				description: "An unexpected error occurred.",
			});
			queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY.all });
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY.all });
		},
	});
}
