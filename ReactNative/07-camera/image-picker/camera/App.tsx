import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import MyButton from "./src/components/Button";
import * as MediaLibrary from "expo-media-library";

export default function App() {
  const [camera, setCamera] = useState<any>({
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  });
  let cameraRef = useRef<any>();
  const [image, setImage] = useState<string>("");
  const [hasMediaPremmissions, setHasMediaPremmissions] = useState<boolean>();

  const takePicture = async () => {
    console.log("take");
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        Alert.alert("Picture Saved!");
        setImage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const askPremmission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      setCamera((prevState: any) => ({
        ...prevState,
        hasCameraPermission: status === "granted",
      }));
    };
    askPremmission();
  }, []);
  useEffect(() => {
    const askPremmission = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasMediaPremmissions(status === "granted");
    };
    askPremmission();
  }, []);

  if (camera.hasCameraPermission === null) {
    return <View />;
  } else if (camera.hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={styles.container}>
        {image ? (
          <Image source={{ uri: image }} style={styles.camera} />
        ) : (
          <Camera
            style={{ flex: 1 }}
            type={camera.type}
            ref={cameraRef}
          ></Camera>
        )}

        <View style={styles.wrapper}>
          {image ? (
            <View>
              <MyButton
                title={"Re-take"}
                icon="retweet"
                onPress={() => setImage("")}
              />
              {hasMediaPremmissions ? (
                <MyButton title={"Save"} icon="check" onPress={saveImage} />
              ) : null}
            </View>
          ) : (
            <View>
              <MyButton
                title={"flip"}
                icon={"retweet"}
                onPress={() => {
                  setCamera({
                    type:
                      camera.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}
              />

              <MyButton
                title={"Take A picture"}
                icon={"camera"}
                onPress={takePicture}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
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
