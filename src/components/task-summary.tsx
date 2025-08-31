"use client";

import { Task } from "@/lib/validation/task";

interface TaskSummaryProps {
  tasks: Task[];
}

export function TaskSummary({ tasks }: TaskSummaryProps) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className='space-y-1'>
      <p className='text-2xl font-semibold'>Tasks: {totalTasks}</p>
      <p className='text-sm text-muted-foreground'>
        Completed: {completedTasks} of {totalTasks}
      </p>
    </div>
  );
}
