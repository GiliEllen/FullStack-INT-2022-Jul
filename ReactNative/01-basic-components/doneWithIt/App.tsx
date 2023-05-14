import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState<any[]>([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function deleteGoalHandler(id: number) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }
  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  return (
    <>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e08cc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          setEnteredGoalText={setEnteredGoalText}
          setGoals={setGoals}
          enteredGoalText={enteredGoalText}
          visible={modelIsVisible}
          endAddGoalHandler={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
        <StatusBar style="auto" />
      </View>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    marginTop: 24,
    flex: 5,
  },
});
