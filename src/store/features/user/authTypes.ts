export interface User {
  fullName: string;
  email: string;
  password: string;
  id: number;
  created_at: string;
  updated_at: string;
}

export interface UserLogin {
  auth_token: string;
}

export interface LoggedUser {
  fullName: string;
  email: string;
  id: number;
}

export interface SignupData {
  email: string;
  password: string;
  fullName: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserState {
  user: LoggedUser | null;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}
