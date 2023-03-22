import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TextState {
  value: string;
  status: ""
}

const initialState: TextState = {
  value: "",
  status: ""
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.value = action.payload;
    },
    resetText: (state) => {
      state = initialState;
    },
  },
});

export const { changeText, resetText } = textSlice.actions;

export const textSelector = (state: RootState) => state.text.value;

export default textSlice.reducer;