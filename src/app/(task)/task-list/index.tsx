"use client";

import { buttonVariants } from "@/components/ui/button";
import { useTasks } from "@/hooks/api/use-tasks";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { cn } from "@/lib/utils";
import { CirclePlus } from "lucide-react";
import TaskSummary from "./summary";
import TaskList from "./list";

export default function TaskListPage() {
  const { data: tasks, isLoading, error } = useTasks();

  return (
    <div className='max-w-[760px] w-full mx-auto px-3 pb-8'>
      <Link
        href={ROUTES.createTask}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "w-full translate-y-[-50%]"
        )}
      >
        Create Task
        <CirclePlus className='size-4' />
      </Link>
      <div className='space-y-6 mt-[40px]'>
        <TaskSummary tasks={tasks?.data || []} />
        <TaskList
          isLoading={isLoading}
          error={error}
          tasks={tasks?.data || []}
        />
      </div>
    </div>
  );
}
