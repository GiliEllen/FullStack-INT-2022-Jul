import React, { useState } from "react";

const ColourPicker = () => {
  const [colour, setColour] = useState<string>('black');

  function handlePickColour(event:any) {
    setColour(event.target.value)
  }
  return (
    <div>
      <input type="color" id="colourPicker" onChange={handlePickColour}/>
      <div style={{
          backgroundColor: colour,
          height: "100px",
          width: "100px",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default ColourPicker;
