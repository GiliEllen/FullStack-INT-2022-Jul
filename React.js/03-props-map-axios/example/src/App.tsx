import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import axios from "axios";

function App() {
  const [imageArray, setImageArray] = useState([]);

  // async function handleGetJokes() {
  //   try {
  //     const { data } = await axios.get(
  //       "https://dog.ceo/api/breeds/image/random/3"
  //     );
  //     const { message } = data;
  //     setImageArray(message);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  function handleGetJokes() {
    axios.get("https://dog.ceo/api/breeds/image/random/3").then(({data})=> {
      const { message } = data;
      setImageArray(message);
    }).catch(({error})=> {
      console.error(error)
    })
  }

  return (
    <div>
      <button onClick={handleGetJokes}>GET JOKES</button>
      {imageArray.map((image, index) => {
        return <Card key={index} src={image} />;
      })}
    </div>
  );
}

export default App;
