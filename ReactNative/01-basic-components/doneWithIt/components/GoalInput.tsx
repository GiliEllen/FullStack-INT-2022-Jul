import React, { FC } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

interface GoalInputProps {
  setEnteredGoalText: CallableFunction;
  setGoals: CallableFunction;
  enteredGoalText: string;
  visible: boolean;
  endAddGoalHandler: any;
}

const GoalInput: FC<GoalInputProps> = ({
  setEnteredGoalText,
  setGoals,
  enteredGoalText,
  visible,
  endAddGoalHandler,
}) => {
  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setGoals((currentGoals: any) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    endAddGoalHandler();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancle"
              onPress={endAddGoalHandler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
