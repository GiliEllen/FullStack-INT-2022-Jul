import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Home from "./views/home/Home";
import ExampleA from "./components/ExampleA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/example" element={<ExampleA/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
