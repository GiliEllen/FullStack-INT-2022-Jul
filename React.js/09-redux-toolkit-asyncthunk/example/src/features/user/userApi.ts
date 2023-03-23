import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserFakeApi = createAsyncThunk(
    'get-user-by-cookie',
    async(_, thunkApi) => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1");
            if(!data) throw new Error("Couldn't receive data from axios GET '/get-user-by-cookie' from: userAPI ");
            return data;            
        } catch (error:any) {
            console.error(error);
            return thunkApi.rejectWithValue({
                error: error.message,
                message: error.message,
              });
        }
    }
)