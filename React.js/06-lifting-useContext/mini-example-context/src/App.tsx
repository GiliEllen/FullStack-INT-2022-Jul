import { Route, Routes } from "react-router-dom";
import Card from "./components/card/Card";
import "./app.scss";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Paragraph from "./components/paragraph/Paragraph";

function App() {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/no-user-needed" element={<Paragraph />} />
          </Routes>
        </UserContext.Provider>
  );
}

export default App;
