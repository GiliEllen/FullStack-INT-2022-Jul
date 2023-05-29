import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Modal,
  FlatList,
} from "react-native";
import CategoriesList from "./components/CategoriesList";
import BigButton from "./components/BigButton";
import { useState } from "react";
import { CATEGORIES } from "./data/data";

export default function App() {
  const [visible, setVisbile] = useState(false);

  function makeVisible() {
    setVisbile(!visible);
  }

  function close() {
    setVisbile(false);
  }
  return (
    <>
      <StatusBar style="dark" />
      <BigButton title={"Categories"} onPress={makeVisible} />
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
        <Button title={"close"} onPress={close} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  box: {
    backgroundColor: "red",
    flex: 3,
    flexDirection: "row",
  },
});
