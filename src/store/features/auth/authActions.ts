import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, removeCookie } from "../../cookies";
import { LoginData, SignupData, User, UserLogin } from "./authTypes";
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
        dispatch(setModal('login'));
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
      dispatch(setModal(null));
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

export const logoutUser = () => {
  removeCookie("jwtToken");
  return { type: "auth/logout" };
};
