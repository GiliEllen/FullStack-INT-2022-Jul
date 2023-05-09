import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { faSearch, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaSistrix } from "react-icons/fa";

function App() {
  const [search, setSearch] = useState<string>("");
  const [empty, setEmpty] = useState("");

  useEffect(() => {
    if (search === "") {
      setEmpty("");
    } else if (search !== "") {
      setEmpty("empty");
    }
  }, [search]);
  return (
    <div className="App">
      <div>
        <legend>Font Awasome</legend>
        <div className="input-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className={empty} />
          <input
            className="input-container__input"
            id="email"
            type="text"
            placeholder={"Search"}
            value={search}
            onInput={(ev: any) => setSearch(ev.target.value)}
          />
        </div>
      </div>

      <div>
        <legend>SVG background</legend>
        <div>
        <input className="nosubmit" type="search" placeholder="Search..."/>
        </div>
      </div>
    </div>
  );
}

export default App;
