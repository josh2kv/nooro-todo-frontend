"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CreateTaskInput } from "@/types/task";
import { createTaskInputSchema } from "@/lib/validation/task";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { taskColorOptions } from "@/config/options";
import { cn } from "@/lib/utils";
import { CirclePlus } from "lucide-react";
import { GoBackButton } from "@/components/go-back-button";
import { useRouter } from "next/navigation";
import { useCreateTask } from "@/hooks/api/use-tasks";
import { ROUTES } from "@/config/routes";

export default function NewTaskPage() {
  const form = useForm<CreateTaskInput>({
    resolver: zodResolver(createTaskInputSchema),
    defaultValues: {
      title: "",
      color: undefined,
    },
  });
  const router = useRouter();
  const { mutate: createTask, isPending } = useCreateTask();

  const handleSubmit = (data: CreateTaskInput) => {
    createTask(data, {
      onSuccess: () => {
        router.push(ROUTES.taskList);
      },
    });
  };

  return (
    <div className='max-w-[760px] w-full mx-auto px-3 pb-8 mt-[90px] space-y-8'>
      <GoBackButton />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem className='gap-3'>
                <FormLabel className='text-blue font-bold'>Title</FormLabel>
                <FormControl>
                  <Input
                    className='h-[52px] placeholder-[#F2F2F2]/40 shadow-[0px_2px_8px_rgba(0,0,0,0.06)]'
                    placeholder='Ex. Brush you teeth'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='color'
            render={({ field }) => (
              <FormItem className='gap-3'>
                <FormLabel className='text-blue font-bold'>Color</FormLabel>
                <FormControl>
                  <div className='flex gap-3'>
                    {taskColorOptions.map((option) => (
                      <button
                        key={option.value}
                        type='button'
                        onClick={() => field.onChange(option.value)}
                        className={cn(
                          "size-[52px] rounded-full border-2 transition-all cursor-pointer",
                          option.className,
                          field.value === option.value
                            ? "border-foreground scale-110"
                            : "border-muted hover:border-foreground/50"
                        )}
                        title={option.label}
                      />
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex gap-3 pt-4'>
            <Button
              type='submit'
              disabled={form.formState.isSubmitting || isPending}
              className='flex-1'
              size='lg'
            >
              {form.formState.isSubmitting || isPending
                ? "Submitting..."
                : "Add Task"}{" "}
              <CirclePlus className='size-4' />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
