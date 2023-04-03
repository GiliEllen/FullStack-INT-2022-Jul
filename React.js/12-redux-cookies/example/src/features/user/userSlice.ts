import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getUserByCookie } from './userApi';

export enum Status {
  LOADING = "loading",
  IDLE = "idle",
  FAILED = "failed",
}

export interface userState {
  value: any;
  status: Status;
}

const initialState: userState = {
  value: "",
  status: Status.IDLE,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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


export const userSelector = (state: RootState) => state.user.value;


export default userSlice.reducer;
