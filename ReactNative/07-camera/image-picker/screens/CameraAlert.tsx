import * as TaskManager from "expo-task-manager";
import * as Updates from "expo-updates";

import { Alert } from "react-native";

const displayCameraActivityFailedAlert = () => {
  Alert.alert(
    "The app is not able to open your camera.",
    "Restarting the app can solve this issue. Restart now?",
    [
      {
        text: "Cancel",
      },
      {
        text: "Ok",
        onPress: async () => {
          //   await TaskManager.unregisterAllTasksAsync();
          //   await Updates.reloadAsync();
          console.log("restart");
        },
      },
    ]
  );
};

export { displayCameraActivityFailedAlert };
