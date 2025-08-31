import { z } from "zod";

export const taskColorSchema = z.enum(["red", "blue", "green"]);
export type TaskColor = z.infer<typeof taskColorSchema>;

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  color: taskColorSchema,
  completed: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const tasksSchema = z.array(taskSchema);
export type Tasks = z.infer<typeof tasksSchema>;

export const createTaskInputSchema = z.object({
  title: z.string().min(1, "Title is required"),
  color: taskColorSchema,
});

export type CreateTaskInput = z.infer<typeof createTaskInputSchema>;

export const updateTaskInputSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  color: taskColorSchema.optional(),
  completed: z.boolean().optional(),
});

export type UpdateTaskInput = z.infer<typeof updateTaskInputSchema>;
