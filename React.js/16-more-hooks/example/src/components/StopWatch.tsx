import { useRef, useState, useEffect } from 'react';

function Stopwatch() {
  const timerIdRef = useRef<number>(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = window.setInterval(() => setCount(c => c+1), 1000);
  };

  const stopHandler = () => {
    window.clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => window.clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

export default Stopwatch