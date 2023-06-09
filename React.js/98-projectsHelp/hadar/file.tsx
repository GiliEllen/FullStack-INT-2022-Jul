//create file called useBeforeRender.tsx
import { useState, useEffect } from 'react';

export const useBeforeRender = (callback: any, deps: any) => {
  const [isRun, setIsRun] = useState(false);

  if (!isRun) {
    callback();
    setIsRun(true);
  }

  useEffect(() => () => setIsRun(false), deps);
};


// in App.jsx

function App() {
///... previuse code

useBeforeRender(() => {
    window.addEventListener("error", (e) => {
      if (e) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div",
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay",
        );
        if (resizeObserverErr)
          resizeObserverErr.className = "hide-resize-observer";
        if (resizeObserverErrDiv)
          resizeObserverErrDiv.className = "hide-resize-observer";
      }
    });
  }, []);
  
  return (
    <div>This is the return</div>
  )
}

// in App.scss

.hide-resize-observer {
  display: none !important;
}