import { Provider } from "react-redux";
import Home from "./src/screens/Home";
import { store } from "./src/redux/store";
import { Button } from "react-native";
import { useState } from "react";
import AnotherScreen from "./src/screens/AnotherScreen";

export default function App() {
  const [disp, setDisp] = useState(true);

  const handleClick = () => {
    setDisp(!disp)
  }
  
  return (
    <Provider store={store}>
      {disp ? <Home /> : <AnotherScreen />}
      <Button onPress={handleClick} title={"switch"}></Button>
    </Provider>
  );
}
