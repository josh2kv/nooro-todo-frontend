import { Task } from "@/types/task";

interface Props {
  tasks: Task[];
}

export default function TaskSummary({ tasks }: Props) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className='flex items-center justify-between'>
      <div className='font-bold'>
        <span className='text-blue'>Tasks</span>{" "}
        <span className='rounded-full px-2 py-1 bg-muted text-xs'>
          {totalTasks}
        </span>
      </div>
      <div className='font-bold'>
        <span className='text-purple'>Completed</span>{" "}
        <span className='rounded-full px-2 py-1 bg-muted text-xs'>
          {completedTasks} of {totalTasks}
        </span>
      </div>
    </div>
  );
}
