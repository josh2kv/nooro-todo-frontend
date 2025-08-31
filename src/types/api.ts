export interface ResSuccess<T = unknown> {
  success: true;
  data: T;
}

export interface ResError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export type ApiResponse<T = unknown> = ResSuccess<T> | ResError;

export interface PaginationMeta {
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}
