// filepath: FE/src/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export type Nullable<T> = T | null;

export interface RouteMeta {
  requiresAuth?: boolean;
  title?: string;
}