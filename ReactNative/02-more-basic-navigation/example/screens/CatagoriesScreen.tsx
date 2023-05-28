import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";


const CatagoriesScreen = ({ navigation}:any) => {
  function renderCatagoriesItem(itemData: any) {
    function pressHandler() {
      navigation.navigate("mealsoverview", {
        categoryId: itemData.item.id
      });
    }
    return (
      <CategoryGridTile
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatagoriesItem}
      numColumns={2}
    />
  );
};

export default CatagoriesScreen;
