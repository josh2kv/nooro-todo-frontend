import { Task } from "@/types/task";
import TaskListItem from "./list-item";
import Image from "next/image";

interface Props {
  isLoading: boolean;
  error: Error | null;
  tasks: Task[];
}
export default function TaskList({ isLoading, error, tasks }: Props) {
  return (
    <div className='space-y-3'>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => <TaskListItem key={task.id} task={task} />)
      ) : (
        <div className='text-center text-sm text-muted-foreground flex flex-col items-center gap-4 border-t rounded-lg h-[266px] justify-center'>
          <Image src='/clipboard.png' alt='Empty task' width={56} height={56} />
          <div className='space-y-3'>
            <p className='font-bold'>
              You don't have any tasks registered yet.{" "}
            </p>
            <p>Create tasks and organize your to-do items.</p>
          </div>
        </div>
      )}
    </div>
  );
}
