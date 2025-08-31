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
      className='h-fit mt-0.5 cursor-pointer dark:data-[state=checked]:bg-dark-purple data-[state=checked]:border-dark-purple focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-full border shadow-xs border-blue focus-visible:ring-[3px]'
      checked={task.completed}
      onCheckedChange={handleToggle}
    />
  );
}
