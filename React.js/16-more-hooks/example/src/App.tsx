import { useEffect, useState } from "react";

import "./App.css";
import { useRef } from "react";
import Stopwatch from "./components/StopWatch";
import CallBack from "./components/CallBack";
import Memo from "./components/Memo";

function App() {
  const countRef = useRef(0);
  const [clickCounter, setClickCounter] = useState(0);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastMsgRef = useRef<HTMLInputElement>(null);

  // console.log("I rendered!");

  const handleClickRef = () => {
    countRef.current++;
    console.log(`clicked ${countRef.current} times`);
  };
  const handleClickState = () => {
    setClickCounter((pre) => pre + 1);
    console.log(`clicked ${clickCounter} times`);
  };

  // useEffect(() => {
  //   console.log(lastMsgRef);
  //   lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  const handleFouces = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="App">
      <div>Hello</div>
      <button onClick={handleClickState}>Click state {clickCounter}</button>
      <button onClick={handleClickRef}>Click ref {countRef.current}</button>
      <input
        type="text"
        value={text}
        onInput={(ev: any) => {
          setText(ev.target.value);
        }}
        ref={inputRef}
      />
      <button
        onClick={() => {
          setMessages([...messages, text]);
          lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Send
      </button>
      <CallBack/>
      {/* <Memo/> */}
      {/* <Stopwatch /> */}
      {/* <div
        style={{
          height: "250px",
          border: "1px solid black",
          overflowY: "scroll",
        }}
      >
        {messages.map((msg) => {
          return <div>{msg}</div>;
        })}
        <div
          id={"this is ref"}
          ref={lastMsgRef}
        ></div>
      </div>
      <button onClick={handleFouces}>
        You like us? click Here to register
      </button> */}
    </div>
  );
}

export default App;
