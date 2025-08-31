import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { taskApi } from "@/lib/api/task";
import { UpdateTaskInput } from "@/types/task";
import { toast } from "sonner";

export const TASKS_QUERY_KEY = ["tasks"] as const;

export const useTasks = () => {
  return useQuery({
    queryKey: TASKS_QUERY_KEY,
    queryFn: taskApi.getTasks,
  });
};

export const useTask = (id: string) => {
  return useQuery({
    queryKey: [...TASKS_QUERY_KEY, id],
    queryFn: () => taskApi.getTaskById(id),
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskApi.createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      toast.success("Task created successfully!");
    },
  });
};

export const useUpdateTask = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: UpdateTaskInput) => taskApi.updateTask(id, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: [...TASKS_QUERY_KEY, id] });
      toast.success("Task updated successfully!");
    },
  });
};

export const useDeleteTask = (taskId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => taskApi.deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: [...TASKS_QUERY_KEY, taskId] });
      toast.success("Task deleted successfully!");
    },
  });
};

export const useToggleTask = (taskId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (completed: boolean) => taskApi.toggleTask(taskId, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: [...TASKS_QUERY_KEY, taskId] });
    },
  });
};
