import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FC } from "react";

interface HeaderProps {
  children?: string;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: 'center'
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
  },
});
