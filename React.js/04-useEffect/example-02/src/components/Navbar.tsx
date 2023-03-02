import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    } //cleanup
  }, [])
  
  return (
    <div>{windowWidth}</div>
  );
};

export default Navbar;
