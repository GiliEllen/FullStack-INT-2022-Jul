import React, { FC } from "react";
import { View, Text, FlatList, StyleSheet, Modal } from "react-native";
import { CATEGORIES } from "../data/data";

interface CategoriesListProps {
  visible: boolean;
}

const CategoriesList: FC<CategoriesListProps> = ({ visible }) => {
  return (
    <Modal visible={visible} animationType="slide" style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </Modal>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
