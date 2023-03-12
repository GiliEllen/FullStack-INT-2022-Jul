import { createContext } from "react";
import axios from "axios";



export const UserContext = createContext<any>(null);


// let user

// async function getUser() {
//   try {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     console.log(data);
//     user = data
//   } catch (error) {
//     console.error(error);
//   }
// }