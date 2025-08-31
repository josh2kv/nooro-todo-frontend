import { useToggleTask } from "@/hooks/api/use-tasks";
import { Task } from "@/types/task";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  task: Task;
}

export function TaskItemToggle({ task }: Props) {
  const { mutate: toggleTask } = useToggleTask(task.id);

  const handleToggle = (checked: boolean) => {
    toggleTask(checked);
  };

  return (
    <Checkbox
      className='cursor-pointer'
      checked={task.completed}
      onCheckedChange={handleToggle}
    />
  );
}
