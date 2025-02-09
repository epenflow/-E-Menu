import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useToast } from "~/hooks/use-toast";

import { USERS_QUERY_KEY } from "./constant";
import { deleteUserService } from "./service";

export function useDeleteUserMutation() {
	const queryClient = useQueryClient();
	const { toast } = useToast();

	return useMutation({
		mutationFn: deleteUserService,
		async onMutate() {
			await queryClient.cancelQueries({ queryKey: USERS_QUERY_KEY.all });
		},
		onSuccess(_, variable) {
			toast({
				title: "Success",
				description: variable.username
					? `Delete ${variable.username} successfully`
					: "Delete user successfully",
			});
		},
		onError() {
			toast({
				variant: "destructive",
				title: "Error",
				description: "An unexpected error occurred.",
			});
			queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY.all });
		},
		onSettled() {
			queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY.all });
		},
	});
}
