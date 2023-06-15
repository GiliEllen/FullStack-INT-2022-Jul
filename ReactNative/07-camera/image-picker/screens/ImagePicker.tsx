import { View, Text, Button, Alert, Image } from "react-native";
import React, { useEffect } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { displayCameraActivityFailedAlert } from "./CameraAlert";

const ImagePickerComponent = () => {
  const [image, setImage] = useState<string>();
  const [hasCameraPremmission, setHasCameraPremmission] = useState<boolean>();
  const [cameraPremissionInformation, requestPremission] =
    useCameraPermissions();

  async function verfiyPremmision() {
    if (
      cameraPremissionInformation &&
      cameraPremissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const premissionResponse = await requestPremission();

      return premissionResponse.granted;
    }

    if (cameraPremissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert("No premission");
      return false;
    }

    return true;
  }

  const takePicture = async () => {
    try {
      const hasPremmision = await verfiyPremmision();
      if (!hasPremmision) {
        return;
      }

      try {
        const result = await ImagePicker.launchCameraAsync();
      } catch (e: any) {
        if (
          e.message.includes(
            "Call to function 'ExponentImagePicker.launchCameraAsync' has been rejected"
          )
        ) {
          displayCameraActivityFailedAlert();
        } else {
          throw e;
        }
      }

      // const picture = await launchCameraAsync();
    } catch (error) {
      console.log("an error");
      console.log(error);
    }
  };

  useEffect(() => {
    const askPremmission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      setHasCameraPremmission(status === "granted");
    };
    askPremmission();
  }, []);

  const accessGallary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      {/* <View></View> */}
      <Button title="Take Image" onPress={takePicture} />
      <Button title="Access Gallary" onPress={accessGallary} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default ImagePickerComponent;
