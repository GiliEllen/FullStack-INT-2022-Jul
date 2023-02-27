import React, { useEffect, useState } from "react";

const ColourPicker = () => {
  const [colour, setColour] = useState<string>();

  function handlePickColour(event:any) {
    setColour(event.target.value)
  }
  return (
    <div>
      <input type="color" id="colourPicker" onChange={handlePickColour}/>
      <div style={{
          backgroundColor: 'rgb()',
          height: "100px",
          width: "100px",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default ColourPicker;
