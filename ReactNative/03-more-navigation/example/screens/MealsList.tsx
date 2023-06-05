import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const MealsList = ({ route }: any) => {
  // const route = useRoute()
  const catId = route.params.categoryId;
  const { color } = route.params;

  return (
    <View>
      <Text style={{ color: color }}>MealsList - {catId}</Text>
    </View>
  );
};

export default MealsList;
