"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function GoBackButton() {
  const router = useRouter();

  return (
    <Button
      size='icon'
      variant='ghost'
      onClick={() => router.back()}
      className='p-1'
    >
      <ArrowLeft className='size-6' />
    </Button>
  );
}
