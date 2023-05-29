import React from "react";
import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/data";

const CategoriesList = () => {
  //   return (
  //     <View>
  //       {CATEGORIES.map((cate) => {
  //         return (
  //           <View>
  //             <Text>{cate.title}</Text>
  //           </View>
  //         );
  //       })}
  //     </View>
  //   );

  return (
    <View>
      <FlatList
        keyExtractor={(cate) => cate.id}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesList;
