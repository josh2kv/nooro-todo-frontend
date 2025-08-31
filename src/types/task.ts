import { z } from "zod"

export const TaskColor = z.enum(["red", "blue", "green"])
export type TaskColor = z.infer<typeof TaskColor>

export const Task = z.object({
  id: z.string(),
  title: z.string(),
  color: TaskColor,
  completed: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Task = z.infer<typeof Task>

export const CreateTaskInput = z.object({
  title: z.string().min(1, "Title is required"),
  color: TaskColor,
})

export type CreateTaskInput = z.infer<typeof CreateTaskInput>

export const UpdateTaskInput = z.object({
  title: z.string().min(1, "Title is required").optional(),
  color: TaskColor.optional(),
  completed: z.boolean().optional(),
})

export type UpdateTaskInput = z.infer<typeof UpdateTaskInput>

export const TasksResponse = z.array(Task)
export type TasksResponse = z.infer<typeof TasksResponse>