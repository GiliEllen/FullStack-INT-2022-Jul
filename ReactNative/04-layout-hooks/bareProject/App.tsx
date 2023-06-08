import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";

import { Colors } from './util/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle: {backgroundColor: '#1c0033'},
         headerTintColor: Colors.fontPrimary
      }}>
        <Stack.Screen name="login" component={Login} options={{
         headerShown: false
        }}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
