import { Task } from "@/types/task";
import TaskListItem from "./list-item";

interface Props {
  isLoading: boolean;
  error: Error | null;
  tasks: Task[];
}
export default function TaskList({ isLoading, error, tasks }: Props) {
  return (
    <div className='space-y-3'>
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </div>
  );
}
