import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/data";

const CategoriesList = () => {
    // return (
    //   <View style={styles.container}>
    //     {CATEGORIES.map((cate) => {
    //       return (
    //         <View>
    //           <Text>{cate.title}</Text>
    //         </View>
    //       );
    //     })}
    //   </View>
    // );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30
    },
  });