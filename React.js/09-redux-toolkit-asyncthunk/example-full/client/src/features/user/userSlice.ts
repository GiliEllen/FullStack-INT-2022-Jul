import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getUserByCookie } from "./userAPI";
import { User } from "./userModel";

export enum Status {
  LOADING = "loading",
  IDLE = "idle",
  FAILED = "failed",
}

export interface UserState {
  value: User | null;
  status: Status;
}

const initialState: UserState = {
  value: null,
  status: Status.IDLE,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout:(state) => {
      state.value = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByCookie.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getUserByCookie.fulfilled, (state, action) => {
        state.status = Status.IDLE;
        state.value = action.payload;
      })
      .addCase(getUserByCookie.rejected, (state) => {
        state.status = Status.FAILED;
      })

  },
});

export const {logout} = userSlice.actions


export const userSelector = (state: RootState) => state.user.value;
export const userStatusSelector = (state: RootState) => state.user.status;

export default userSlice.reducer;
