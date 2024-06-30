import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, removeCookie } from "../../cookies";
import { LoginData, SignupData, User, UserLogin } from "./authTypes";

const API = "http://localhost:5001/api";

export const signupUser = createAsyncThunk<
  User,
  SignupData,
  { rejectValue: string }
>("/register", async (signupData: SignupData, { rejectWithValue }) => {
  try {
    const response = await axios.post<User>(`${API}/register`, signupData);
    if (response.status === 201) {
      return response.data;
    } else {
      return rejectWithValue("Unexpected response status");
    }
  } catch (error: any) {
    return rejectWithValue(
      error.response ? error.response.data.error : error.message
    );
  }
});

export const loginUser = createAsyncThunk<
  UserLogin,
  LoginData,
  { rejectValue: string }
>("/login", async (loginData: LoginData, { rejectWithValue }) => {
  try {
    const response = await axios.post<UserLogin>(`${API}/login`, loginData);

    if (response.status === 200) {
      setCookie("jwtToken", response.data.auth_token, 1);
      return response.data;
    } else {
      return rejectWithValue("Unexpected response status");
    }
  } catch (error: any) {
    return rejectWithValue(
      error.response ? error.response.data.error : error.message
    );
  }
});

export const logoutUser = () => {
  removeCookie("jwtToken");
  return { type: "auth/logout" }; 
};
