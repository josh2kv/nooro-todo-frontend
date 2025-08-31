"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTaskInput, TaskColor } from "@/lib/validation/task";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface TaskFormProps {
  onSubmit: (data: CreateTaskInput) => void;
  initialData?: Partial<CreateTaskInput>;
  isLoading?: boolean;
  title?: string;
}

const colorOptions: { value: TaskColor; label: string; className: string }[] = [
  { value: "red", label: "Red", className: "bg-red-500" },
  { value: "blue", label: "Blue", className: "bg-blue-500" },
  { value: "green", label: "Green", className: "bg-green-500" },
];

export function TaskForm({
  onSubmit,
  initialData,
  isLoading = false,
  title = "Create Task",
}: TaskFormProps) {
  const form = useForm<CreateTaskInput>({
    resolver: zodResolver(CreateTaskInput),
    defaultValues: {
      title: initialData?.title || "",
      color: initialData?.color || "blue",
    },
  });

  const handleSubmit = (data: CreateTaskInput) => {
    onSubmit(data);
  };

  return (
    <Card className='w-full max-w-md mx-auto'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='space-y-6'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter task title...'
                      {...field}
                      disabled={isLoading}
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
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <div className='flex gap-3'>
                      {colorOptions.map((option) => (
                        <button
                          key={option.value}
                          type='button'
                          onClick={() => field.onChange(option.value)}
                          disabled={isLoading}
                          className={cn(
                            "w-8 h-8 rounded-full border-2 transition-all",
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
              <Button type='submit' disabled={isLoading} className='flex-1'>
                {isLoading ? "Saving..." : "Save Task"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
