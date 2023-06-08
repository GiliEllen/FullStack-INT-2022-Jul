import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const [dogUrl, setDogUrl] = useState("");
  const handleGetRandomDog = async () => {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      if (!data) throw new Error("no data");
      setDogUrl(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetRandomDog()
  }, [])
  return (
    <View style={styles.container}>
      {dogUrl ? (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: dogUrl }} />
          <Text>Dog!</Text>
        </View>
      ) : (
        <Text>No Dog</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30, 
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: 300,
    height: 300,
  },
});
