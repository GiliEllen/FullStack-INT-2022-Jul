import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface TextState {
  value: string;
  from: string;
}

const initialState: TextState = {
  value: "initial",
  from: "A",
};

export const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
        },
        changeFrom: (state, action) => {
            state.from = action.payload
        },
        changeValueAndFrom: (state, action) => {
            state.value = action.payload.value
            state.from = action.payload.from
        }
    },
})

export const {changeValue, changeFrom, changeValueAndFrom} = textSlice.actions;

export const textSelector = (state: RootState) => state.text

export default textSlice.reducer