import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function App() {
  const [errorMsg, setErrorMsg] = useState("");
  const [location, setLocation] = useState<Location.LocationObject>();
  const [text, setText] = useState("Waiting...")
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>()

  useEffect(() => {
    const handleGetLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Premission for location is denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync()
      setLocation(location)
    }
    handleGetLocation();

  }, []);

  useEffect(() => {
    if (errorMsg) {
      setText(errorMsg)
    } else if(location) {
      setText(JSON.stringify(location))
    }

    const translateLocation = async () => {
      if (location) {
        Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }).then((result) => {
          setAddress(result[0])
        }).catch((error) => {
          setErrorMsg("Somthing went wrong...")
        })
      }
    }

    translateLocation()
  },[location])

  

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* <Text>You are at: {text}</Text> */}
      <Text>This is at: {JSON.stringify(address)}</Text>
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
  },
});
