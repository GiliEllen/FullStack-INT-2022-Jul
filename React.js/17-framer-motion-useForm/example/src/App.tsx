import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContactMe from "./components/ContactMe";
import About from "./components/About";
import Projects from "./components/Projects";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [display, setDisplay] = useState(true);

  setTimeout(() => {
    setDisplay(false);
  }, 4000);
  return (
    <div className="App">
      <AnimatePresence>
        {display && (
          <motion.h1
            key="ThisisKey"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            This is Me
          </motion.h1>
        )}
      </AnimatePresence>
      <div style={{ height: "800px" }}></div>
      <About />
      <div style={{ height: "800px" }}></div>
      <Projects />
      <div style={{ height: "800px" }}></div>

      {/* <ContactMe /> */}
    </div>
  );
}

export default App;
