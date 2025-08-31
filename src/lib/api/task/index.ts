import { CreateTaskInput, Task, UpdateTaskInput } from "@/types/task";
import { api } from "../instance";
import { ResSuccess } from "@/types/api";

async function getTasks(): Promise<ResSuccess<Task[]>> {
  const res = await api.get<ResSuccess<Task[]>>("/tasks");
  return res.data;
}

async function createTask(input: CreateTaskInput): Promise<ResSuccess<Task>> {
  const res = await api.post<ResSuccess<Task>>("/tasks", input);
  return res.data;
}

async function updateTask(
  id: string,
  input: UpdateTaskInput
): Promise<ResSuccess<Task>> {
  const res = await api.put<ResSuccess<Task>>(`/tasks/${id}`, input);
  return res.data;
}

async function deleteTask(id: string): Promise<ResSuccess<null>> {
  const res = await api.delete<ResSuccess<null>>(`/tasks/${id}`);
  return res.data;
}

async function toggleTask(
  id: string,
  completed: boolean
): Promise<ResSuccess<Task>> {
  const res = await api.patch<ResSuccess<Task>>(`/tasks/${id}`, {
    completed,
  });
  return res.data;
}

export const taskApi = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
};
