import axios from "axios";
import { toast } from "react-hot-toast";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const { data } = await axios.get("/api/users/logout");
      if (data.logout) {
        toast.success("Logoff successful. see you soon!");
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
      toast.error("Somthing went wrong... Please try again!");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
