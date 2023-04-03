import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./userModel";

export const getUserByCookie = createAsyncThunk(
  "get-user-by-cookie",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/api/users/get-user-by-cookie");
      if (!data)
        throw new Error(
          "Couldn't receive data from axios GET '/get-user-by-cookie' from: userAPI "
        ); //{userDB: userDB}
      const { userDB } = data;
      return userDB;
    } catch (error: any) {
      console.error(error);
      return thunkApi.rejectWithValue({
        error: error.message,
        message: error.message,
      });
    }
  }
);

// export const getUserByCookie = createAsyncThunk(
//     'get-user-by-cookie',
//     async() => {
//         try {
//             const { data } = await axios.get("/api/users/get-user-by-cookie");
//             if(!data) throw new Error("Couldn't receive data from axios GET '/get-user-by-cookie' from: userAPI "); //{userDB: userDB}
//             const { userDB } = data;
//             return userDB;
//         } catch (error:any) {
//             console.error(error);
//         }
//     }
// )


//dispatch(updateUser({object}))

export const updateUser = createAsyncThunk(
    'update-user-avatar',
    async({ user }: { user: User }) => { //always send object!!
        try {
            console.log(user)
            const {data} = await axios.post("/api/users/update-all-user-information", {user});
            if(!data) throw new Error("could not receive data from axios POST '/update-user' from: userAPI")
            const {result} = data;
            return result[0]
        } catch (error) {
            console.error(error)
        }
    }
)
