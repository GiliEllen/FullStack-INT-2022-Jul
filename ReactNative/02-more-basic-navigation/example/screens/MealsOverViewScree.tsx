import React from "react";
import { MEALS } from "../data/data";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
// import {useRoute} from "@react-navigation/native"

const MealsOverViewScreen = ({ route }: any) => {
  // const route = useRoute()
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData: any) {
    return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} item={itemData.item}/>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
