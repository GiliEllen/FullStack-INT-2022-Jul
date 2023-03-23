import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserFakeAPI = createAsyncThunk(
    '/api/user/getUserFakeAPI', //this is not for the server!!!!!
    async () => {
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1");
            if (!data) throw new Error("no data from /api/user/getUserFakeAPI at file userAPI");
            return data
        } catch (error) {
            console.error(error)
        }
    }
)