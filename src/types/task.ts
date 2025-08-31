import { z } from "zod";
import {
  taskColorSchema,
  taskSchema,
  tasksSchema,
} from "@/lib/validation/task";
import {
  createTaskInputSchema,
  updateTaskInputSchema,
} from "@/lib/validation/task";

export type TaskColor = z.infer<typeof taskColorSchema>;

export type Task = z.infer<typeof taskSchema>;

export type Tasks = z.infer<typeof tasksSchema>;

export type CreateTaskInput = z.infer<typeof createTaskInputSchema>;

export type UpdateTaskInput = z.infer<typeof updateTaskInputSchema>;
