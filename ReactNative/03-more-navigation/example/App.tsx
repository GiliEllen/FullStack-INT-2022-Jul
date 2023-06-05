import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MealsList from "./screens/MealsList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="allCatgories" component={CategoriesScreen} />
          <Stack.Screen name="mealsList" component={MealsList} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <CategoriesScreen /> */}
    </>
  );
}
// BrowserRouter
// Routes
// Route

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  box: {
    backgroundColor: "red",
    flex: 3,
    flexDirection: "row",
  },
});
