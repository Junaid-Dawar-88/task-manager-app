import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handlePostData, type Todos } from "@/api-call/api-call";

const usePostTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handlePostData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default usePostTodo;



