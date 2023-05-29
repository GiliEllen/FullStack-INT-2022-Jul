import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface BigButtonProps {
  title: string;
  onPress: any;
}

const BigButton: FC<BigButtonProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text style={[styles.text]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "red",
    color: "white",
    width: 100,
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
