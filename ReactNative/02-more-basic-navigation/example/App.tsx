import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import CatagoriesScreen from "./screens/CatagoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScree";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="mealsCategories" component={CatagoriesScreen}/>
          <Stack.Screen name="mealsoverview" component={MealsOverViewScreen}/>
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
