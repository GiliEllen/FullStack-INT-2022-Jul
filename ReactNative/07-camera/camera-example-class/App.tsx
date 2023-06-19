import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import { Camera } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import * as Permissions from "expo-permissions";
import MyButton from "./components/MyButton";
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  // create interface for camera!
  const [camera, setCamera] = useState<any>({
    hasCameraPermissions: null, //boolean
    type: Camera.Constants.Type.back,
  });

  const [image, setImage] = useState("");
  const [hasMediaPremissions, setHasMediaPremissions] = useState<boolean>();

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
  }, []);

  useEffect(() => {
    const askPermissions = async () => {
      const {status} = await MediaLibrary.requestPermissionsAsync()
      setHasMediaPremissions(status === "granted")
    } 
    askPermissions()
  },[])

  const takePicture = async () => {
    try {
      if (cameraRef) {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const retake = () => {
    setImage("");
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        Alert.alert("Picture Saved!")
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.camera} />
      ) : (
        <Camera
          style={styles.camera}
          type={camera.type}
          ref={cameraRef}
        ></Camera>
      )}

      {image ? (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <MyButton
            title={"Retake Picture"}
            icon={"retweet"}
            onPress={retake}
          />

          <MyButton
            title={"Save To Album"}
            icon={"check"}
            onPress={saveImage}
          />
        </View>
      ) : (
        <MyButton
          title={"Take A Picture"}
          icon={"camera"}
          onPress={takePicture}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    paddingBottom: 30,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
  wrapper: {
    // flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
});
