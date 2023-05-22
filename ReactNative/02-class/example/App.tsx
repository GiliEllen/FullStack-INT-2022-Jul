import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { colors } from "./util/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={require("./images/field.jpg")} />

      {/* <ScrollView style={styles.viewContainer}>
        <Text style={[styles.header, styles.helloWorld]}>Hello world!</Text>
        <Text style={styles.header}>This is another text!</Text>
      </ScrollView> */}
      <View>
        <TextInput
          keyboardType="numeric"
          placeholder="This is an input"
        ></TextInput>
        <Button title="Click" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: colors.primary500,
    padding: 15,
    flex: 1,
  },
  helloWorld: {
    flex: 4,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderDashed: {
    borderStyle: "dashed",
  },
  imageStyle: {
    width: 50,
    height: 50,
  },
  viewContainer: {
    borderColor: "blue",
    borderWidth: 1,
    borderStyle: "solid",
    height: 20,
  },
});
