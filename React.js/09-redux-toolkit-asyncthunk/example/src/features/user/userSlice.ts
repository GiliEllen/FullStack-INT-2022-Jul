import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getUserFakeApi } from './userApi';


export interface userState {
  value: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: userState = {
  value: "",
  status: 'idle',
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserFakeApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserFakeApi.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getUserFakeApi.rejected, (state) => {
        state.status = 'failed';
      });
  },
});


export const userSelector = (state: RootState) => state.user.value;


export default userSlice.reducer;
