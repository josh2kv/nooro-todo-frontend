import axios from "axios";
import { CreateTaskInput, UpdateTaskInput, Task } from "@/types/task";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const taskApi = {
  // Get all tasks
  getTasks: async (): Promise<Task[]> => {
    const res = await api.get<Task[]>("/tasks");
    return res.data;
  },

  // Create a new task
  createTask: async (input: CreateTaskInput): Promise<Task> => {
    const res = await api.post<Task>("/tasks", input);
    return res.data;
  },

  // Update a task
  updateTask: async (id: string, input: UpdateTaskInput): Promise<Task> => {
    const res = await api.put<Task>(`/tasks/${id}`, input);
    return res.data;
  },

  // Delete a task
  deleteTask: async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },

  // Toggle task completion
  toggleTask: async (id: string, completed: boolean): Promise<Task> => {
    const res = await api.put<Task>(`/tasks/${id}`, { completed });
    return res.data;
  },
};
