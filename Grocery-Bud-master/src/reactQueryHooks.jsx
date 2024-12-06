import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

export const useFetchAllTasks = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  return { isLoading, data, error, isError };
};

export const useCreateTask = () => {
    const queryClient = useQueryClient()
  const {mutate:AddTask,isPending} = useMutation({
    mutationFn: (text) => customFetch.post("/", { "title": text }),
   onSuccess:()=>{
    queryClient.invalidateQueries({queryKey:['tasks']});
    toast.success("item was added successfully")
   },
   onError:(error)=>{
    toast.error(error.response.data.msg);
   }
  });
  return {AddTask,isPending};
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask} = useMutation({
    mutationFn: ({ itemId, done }) =>
      customFetch.patch(`/${itemId}`, { isDone: done }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task Updated successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return {editTask};
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isPending: TaskBeingDeleted } = useMutation({
    mutationFn: (itemId) => customFetch.delete(`/${itemId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task deleted successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { deleteTask, TaskBeingDeleted };
};
