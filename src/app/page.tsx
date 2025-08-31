"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useTasks } from "@/hooks/api/use-tasks";
import { TaskCard } from "@/components/task-card";
import { TaskSummary } from "@/components/task-summary";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: tasks, isLoading, error } = useTasks();

  if (isLoading) {
    return (
      <div className='container mx-auto px-4 py-8 max-w-2xl'>
        <div className='space-y-4'>
          <div className='h-8 bg-muted animate-pulse rounded'></div>
          <div className='h-4 bg-muted animate-pulse rounded w-48'></div>
          <div className='space-y-2'>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className='h-16 bg-muted animate-pulse rounded'
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='container mx-auto px-4 py-8 max-w-2xl'>
        <div className='text-center space-y-4'>
          <h1 className='text-2xl font-bold text-destructive'>
            Error Loading Tasks
          </h1>
          <p className='text-muted-foreground'>
            Unable to load your tasks. Please try refreshing the page.
          </p>
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        </div>
      </div>
    );
  }

  if (!tasks) {
    return null;
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-2xl'>
      <div className='space-y-6'>
        <div className='flex items-start justify-between'>
          <TaskSummary tasks={tasks.data} />
          <Link href='/create'>
            <Button size='sm' className='gap-2'>
              <Plus className='h-4 w-4' />
              Create Task
            </Button>
          </Link>
        </div>

        <div className='space-y-3'>
          {tasks.data.length === 0 ? (
            <div className='text-center py-12 space-y-4'>
              <p className='text-muted-foreground'>No tasks yet</p>
              <Link href='/create'>
                <Button className='gap-2'>
                  <Plus className='h-4 w-4' />
                  Create Your First Task
                </Button>
              </Link>
            </div>
          ) : (
            tasks.data.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </div>
      </div>
    </div>
  );
}
