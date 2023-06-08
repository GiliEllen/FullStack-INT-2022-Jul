import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const [dogUrl, setDogUrl] = useState<string>("");

  const handleGetDogUrl = async () => {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      if (!data || data.status !== "success")
        throw new Error("No data on function handleGetDogUrl in FILe App.tsx");
      setDogUrl(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetDogUrl()
  },[])

  return (
    <View style={styles.container}>
      {dogUrl ? (
        <View style={styles.imageContainer}>
          <Text>Dog!</Text>
          <Image style={styles.image} source={{uri: dogUrl}} />
        </View>
      ) : (
        <View>
          <Text>No Dog!</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: 300,
    height: 300
  }
});
