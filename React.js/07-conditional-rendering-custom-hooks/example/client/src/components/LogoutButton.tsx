import axios from "axios";
import { toast } from "react-hot-toast";
import useHoverIn from "../hooks/useHoverIn";
import useTimer from "../hooks/useTimer";
import useCounter from "./../hooks/useCounter";

const LogoutButton = () => {
  const { timerData, isTimerRunning, togglePlayPause, handleReset } = useTimer();
  const { counter, increment, decrement } = useCounter(0, 5);
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
      <button onClick={togglePlayPause}>{isTimerRunning ? "pause" : "play"}</button>
      <button onClick={handleReset}>reset</button>


      <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default LogoutButton;
