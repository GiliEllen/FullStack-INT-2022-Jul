import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import Home from "./components/home/Home";
import Login from "./Screens/login/Login";
import { colors } from './../../02-class/example/util/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="light"/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
