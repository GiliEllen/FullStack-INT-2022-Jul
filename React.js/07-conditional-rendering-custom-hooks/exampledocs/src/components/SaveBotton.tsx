import { useState, useEffect } from "react";

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  function handleToggleNetwork() {
    setIsOnline(!isOnline);
  }

  return (
    <>
      <button onClick={handleToggleNetwork}>Toggle</button>

      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
    </>
  );
}
