"use client";

import { Task, TaskColor } from "@/lib/validation/task";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToggleTask, useDeleteTask } from "@/hooks/api/use-tasks";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: Task;
}

const colorVariants: Record<TaskColor, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
};

export function TaskCard({ task }: TaskCardProps) {
  const toggleTask = useToggleTask();
  const deleteTask = useDeleteTask();

  const handleToggleComplete = (checked: boolean) => {
    toggleTask.mutate({ id: task.id, completed: checked });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask.mutate(task.id);
    }
  };

  return (
    <Card
      className={cn(
        "transition-all duration-200 hover:shadow-md",
        task.completed && "opacity-70"
      )}
    >
      <CardContent className='flex items-center gap-4 p-4'>
        <Checkbox
          checked={task.completed}
          onCheckedChange={handleToggleComplete}
          disabled={toggleTask.isPending}
        />

        <div className='flex-1 flex items-center gap-3'>
          <div
            className={cn("w-3 h-3 rounded-full", colorVariants[task.color])}
          />
          <span
            className={cn(
              "flex-1 text-sm font-medium",
              task.completed && "line-through text-muted-foreground"
            )}
          >
            {task.title}
          </span>
        </div>

        <Button
          variant='ghost'
          size='sm'
          onClick={handleDelete}
          disabled={deleteTask.isPending}
          className='text-destructive hover:text-destructive hover:bg-destructive/10'
        >
          <Trash2 className='h-4 w-4' />
        </Button>
      </CardContent>
    </Card>
  );
}
