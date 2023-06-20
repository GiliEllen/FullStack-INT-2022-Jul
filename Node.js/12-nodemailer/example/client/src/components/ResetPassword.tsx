import axios from "axios";
import {useState} from "react";


const ResetPassword = () => {
  const [password, setPassword] = useState()
  const [rePassword, setRePassword] = useState()

  const handleResetPassword = async (ev:any) => {
    ev.preventDefault()
    try {
        const {data} = await axios.post("/api/auth/new-password", {password})
        console.log(data)
        
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <input type="password" placeholder="password" onInput={(ev:any) => {setPassword(ev.target.value)}}/>
        <input type="password" placeholder="repeat password" onInput={(ev:any) => {setRePassword(ev.target.value)}}/>
        <button type="submit">Click here to reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;
