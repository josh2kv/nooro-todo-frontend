import { Task } from "@/types/task";
import { TaskItemDelete } from "./delete";
import { useState } from "react";
import { useDeleteTask } from "@/hooks/api/use-tasks";
import { TaskItemToggle } from "./toggle";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

interface Props {
  task: Task;
}

export default function TaskListItem({ task }: Props) {
  const [open, setOpen] = useState(false);
  const { mutate: deleteTask, isPending } = useDeleteTask(task.id);

  return (
    <Link
      href={ROUTES.detailTask.replace(":id", task.id)}
      className='border rounded-lg bg-card text-card-foreground p-4 w-full flex justify-between hover:brightness-105 transition-all'
    >
      <div className='flex gap-4'>
        <TaskItemToggle task={task} />
        <p className='text-sm flex-1 leading-[1.4'>{task.title}</p>
      </div>
      <TaskItemDelete
        onConfirm={deleteTask}
        onOpenChange={setOpen}
        isLoading={isPending}
      />
    </Link>
  );
}
