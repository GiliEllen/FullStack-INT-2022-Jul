import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { CategoryType } from "../models/category";

interface CategoryGridTileProps {
  item: CategoryType;
  onPress: () => void;
}

const CategoryGridTile: FC<CategoryGridTileProps> = ({ item, onPress }) => {
  const { color, title } = item;

  function handlePress() {
    console.log("press");
  }
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    margin: 16,
    flex: 1,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4, //Android only

    //ios only:
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
