import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoggedUser, User, UserState } from "./authTypes";
import { signupUser, loginUser, fetchCurrentUser } from "./authActions";
import { getCookie, removeCookie } from "../../cookies";

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  isLoggedIn: !!getCookie("jwtToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
      removeCookie("jwtToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? String(action.payload)
          : "Unknown error occurred";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? String(action.payload)
          : "Unknown error occurred";
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCurrentUser.fulfilled,
        (state, action: PayloadAction<LoggedUser>) => {
          state.loading = false;
          state.user = action.payload;
          state.isLoggedIn = true; 
        }
      )
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? String(action.payload)
          : "Unknown error occurred";
      });
  },
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
