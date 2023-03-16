
import axios from 'axios';

export async function getUserFromCookies(setUser:CallableFunction) {
    try {
      const { data } = await axios.get("/api/users/get-user-by-cookie")
      setUser(data.userDB);
    } catch (error) {
      console.error(error);
    }
  }