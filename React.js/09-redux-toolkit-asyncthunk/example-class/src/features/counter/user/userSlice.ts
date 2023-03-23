
import { createSlice } from '@reduxjs/toolkit';
import { getUserFakeAPI } from './userApi';
import { RootState } from '../../../app/store';


export interface userState {
    value: any;
    status: 'idle' | 'loading' | 'failed'
}

const initialState:userState = {
    value: "",
    status: "idle"
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUserFakeAPI.pending, (state) => {
            state.status = 'loading'
        }) // pending - while its happenning
        .addCase(getUserFakeAPI.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = action.payload
        }) // fulfilled - after resolve true
        .addCase(getUserFakeAPI.rejected, (state) => {
            state.status = 'failed'
        }) // rejected - is not resolved
    }
})

export const userSelector = (state: RootState) => state.user.value

export default userSlice.reducer