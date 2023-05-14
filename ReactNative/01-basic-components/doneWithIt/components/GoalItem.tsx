import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface GoalItemProps {
  text: string;
  deleteGoalHandler: any;
  id: number;
}

const GoalItem: React.FC<GoalItemProps> = ({ text, deleteGoalHandler, id }) => {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
});
