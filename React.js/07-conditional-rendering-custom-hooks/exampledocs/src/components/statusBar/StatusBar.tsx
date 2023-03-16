import { useState, useEffect } from "react";

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  function handleToggleNetwork() {
    setIsOnline(!isOnline)
  }

  return (
    <>
    <button onClick={handleToggleNetwork}>Toggle</button>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </>
  );
}
