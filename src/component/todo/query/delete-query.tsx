import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleDeleteTodo } from "@/api-call/api-call";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleDeleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
