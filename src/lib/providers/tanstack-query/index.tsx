"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { toast } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1 * 60 * 1000,
      gcTime: 5 * 60 * 1000,
    },
    mutations: {
      retry: 0,
    },
  },
  queryCache: new QueryCache({
    onError: (error: Error, query) => {
      console.error("Query error:", error, query);

      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || error.message);
      } else {
        toast.error(error.message);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: Error, _variables, _context, mutation) => {
      console.error("Mutation error:", error, mutation);

      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || error.message);
      } else {
        toast.error(error.message);
      }
    },
  }),
});

export default function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
