import axios from "axios";
import { toast } from "react-hot-toast";
import useHover from "../hooks/useHoverIn";
import useHoverIn from "../hooks/useHoverIn";
import useTimer from "../hooks/useTimer";
import useCounter from "./../hooks/useCounter";

const LogoutButton = () => {
  const { timerData, isTimerRunning, togglePlayPause, handleReset } = useTimer(
    1,
    true
  );
  const { counter, increment, decrement } = useCounter();
  const [hoverRef, isHovered] = useHoverIn<HTMLDivElement>();
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

  const log = () => {
    console.log("hover");
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      {timerData}
      <button onClick={togglePlayPause}>Play/pause</button>
      <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
    </>
  );
};

export default LogoutButton;
