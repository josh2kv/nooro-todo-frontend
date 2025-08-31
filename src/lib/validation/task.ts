import { z } from "zod";

export const taskColorSchema = z.enum(["red", "blue", "green"]);

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  color: taskColorSchema,
  completed: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const tasksSchema = z.array(taskSchema);

export const createTaskInputSchema = z.object({
  title: z.string().min(1, "Title is required"),
  color: taskColorSchema,
});

export const updateTaskInputSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  color: taskColorSchema.optional(),
  completed: z.boolean().optional(),
});
