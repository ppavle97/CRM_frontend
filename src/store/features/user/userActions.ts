import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./userTypes";

const API = "http://localhost:5001/api";

export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("user/fetchUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<User[]>(`${API}/users`);
    if (response.status !== 200) {
      return rejectWithValue("Failed to fetch users");
    }
    return response.data;
  } catch (error: any) {
    return rejectWithValue(
      error.response ? error.response.data.message : error.message
    );
  }
});
