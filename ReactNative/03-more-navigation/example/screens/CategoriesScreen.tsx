import React, { FC } from "react";
import { View, Text, FlatList, StyleSheet, Modal } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = ({ navigation }: any) => {
  // const navigation = useNavigation()
  function renderItem(itemData: any) {
    function pressHandler() {
      navigation.navigate("mealsList", {
        categoryId: itemData.item.id,
        color: itemData.item.color,
      });
    }
    return <CategoryGridTile item={itemData.item} onPress={pressHandler} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
