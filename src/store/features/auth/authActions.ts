import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../cookies";
import {
  LoggedUser,
  LoginData,
  SignupData,
  User,
  UserLogin,
} from "./authTypes";
import { setModal } from "../modal/modalSlice";

const API = "http://localhost:5001/api";

export const signupUser = createAsyncThunk<
  User,
  SignupData,
  { rejectValue: string }
>(
  "/register",
  async (signupData: SignupData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>(`${API}/register`, signupData);
      if (response.status === 201) {
        dispatch(setModal("success_singup"));
        return response.data;
      } else {
        return rejectWithValue("Unexpected response status");
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const loginUser = createAsyncThunk<
  UserLogin,
  LoginData,
  { rejectValue: string }
>("/login", async (loginData: LoginData, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<UserLogin>(`${API}/login`, loginData);
    if (response.status === 200) {
      setCookie("jwtToken", response.data.token, 1);
      dispatch(setModal("success_login"));
      return response.data;
    } else {
      return rejectWithValue("Unexpected response status");
    }
  } catch (error: any) {
    return rejectWithValue(
      error.response ? error.response.data.message : error.message
    );
  }
});

export const fetchCurrentUser = createAsyncThunk<
  LoggedUser,
  void,
  { rejectValue: string }
>("user/fetchCurrentUser", async (_, { rejectWithValue }) => {
  try {
    const token = getCookie("jwtToken");
    const response = await axios.get<{ userData: LoggedUser }>(
      `${API}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data.userData;
    } else {
      return rejectWithValue("Unexpected response status");
    }
  } catch (error: any) {
    return rejectWithValue(
      error.response ? error.response.data.message : error.message
    );
  }
}) as AsyncThunk<LoggedUser, void, { rejectValue: string }>;
