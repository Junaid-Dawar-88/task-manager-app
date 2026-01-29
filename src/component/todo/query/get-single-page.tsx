import { useQuery } from "@tanstack/react-query";
import { handleGetById, type Todos } from "@/api-call/api-call";

const useGetTodoById = (id: number) => {
  return useQuery<Todos>({
    queryKey: ["todo", id],
    queryFn: () => handleGetById(id),
    enabled: !!id,
  });
};

export default useGetTodoById;


