import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TextState {
  value: string;
  status: "idle" | "loading" | "failed";
}

// const [text, setText] = useState("write somthing here")

const initialState: TextState = {
  value: "",
  status: "idle",
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.value = action.payload;
    }, //action
    resetText: (state) => {
      state.value = ""
    }
  },
});

export const { changeText, resetText } = textSlice.actions;
export const textSelector = (state: RootState) => state.text.value;

export default textSlice.reducer;
