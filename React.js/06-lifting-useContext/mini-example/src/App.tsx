
import { Route, Routes } from "react-router-dom";
import Card from "./components/card/Card";
import "./app.scss";

//npm i react-router-dom

function App() {
  return (
    <Routes>
      <Route path="/" element={<Card />} />
    </Routes>
  );
}

export default App;
