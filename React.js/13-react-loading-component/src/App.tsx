import React, { useState } from "react";
import Spinner from "./components/Spinner";
import "./App.scss";
import axios from "axios";

export default function App() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetch = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://api.disneyapi.dev/character");
      console.log(response.data);
      // Optional code to simulate delay
      // setTimeout(() => {
      //   setCharacters(response.data.data);
      //   setIsLoading(false);
      // }, 3000);

      setCharacters(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setErrorMessage("Unable to fetch movie list");
      setIsLoading(false);
    }
  };
  const renderCharacters = (
    <div className="characterlist-container">
      {characters.map((item, index) => (
        <div className="character-container" key={index}>
          <img src={item.imageUrl} alt="" />
          <div className="characterDetail">
            {item.films.length > 0 ? (
              <div className="film">{`${item.films[0]}`}</div>
            ) : null}

            <div className="name">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="App">
      {isLoading ? <Spinner /> : renderCharacters}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button onClick={handleFetch} disabled={isLoading}>
        Fetch characters
      </button>
    </div>
  );
}
