import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MyButton = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
