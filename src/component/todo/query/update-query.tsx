import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleUpdateTodo } from "@/api-call/api-call";
import type { Todos } from "@/api-call/api-call";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      updatedData,
    }: {
      id: number;
      updatedData: Partial<Todos>;
    }) => handleUpdateTodo(id, updatedData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
