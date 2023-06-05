import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CatagoriesScreen from "./screens/CatagoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScree";

const Stack = createNativeStackNavigator();

function NotificationsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}



export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="mealsCategories"
            component={CatagoriesScreen}
            options={{
              title: "Meals!",
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: '#3f2f25'
              }
            }}
          />
          <Stack.Screen name="mealsoverview" component={MealsOverViewScreen} />
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
