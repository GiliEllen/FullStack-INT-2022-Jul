import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}

export default InputFocus;
