export interface User {
  id: number;
  fullName: string;
  email:string;
  created_at: string;
  updated_at: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
