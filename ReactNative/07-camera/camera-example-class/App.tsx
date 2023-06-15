import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Camera } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import * as Permissions from "expo-permissions";

export default function App() {
  // create interface for camera!
  const [camera, setCamera] = useState<any>({
    hasCameraPermissions: null, //boolean
    type: Camera.Constants.Type.back,
  });

  const [image, setImage] = useState("");

  let cameraRef = useRef<any>();

  useEffect(() => {
    const askPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      setCamera((prevState: any) => ({
        ...prevState,
        hasCameraPermissions: status === "granted", // true or false
      }));
    };

    askPermissions();
  },[]);

  const takePicture = async () => {
    try {
      if (cameraRef) {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data)
        setImage(data.uri)
            }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={camera.type} ref={cameraRef}></Camera>
      <Button title={"take Picture"} onPress={takePicture}/>
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
  camera: {
    flex: 1,
  },
});
