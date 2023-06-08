import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/home/Home";
import Login from "./Screens/login/Login";
import { colors } from "./../../02-class/example/util/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#1c0033" },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#2f004b",
            },
          }}
        >
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
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
