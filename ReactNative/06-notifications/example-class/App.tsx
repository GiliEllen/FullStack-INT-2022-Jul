import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Alert, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import axios from "axios";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  const [token, setToken] = useState("ExponentPushToken[YOUR TOKEN HERE]");

  const schedualNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "my first local",
        body: "this is the body",
        data: { userName: "Gili", id: 1 },
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        if (notification.request.content.data.id === 1) {
          console.log("got notification");
          console.log(notification.request.content.data.userName);
        } else {
          console.log("this");
        }
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (Device.isDevice) {
      async function configurePushNotifications() {
        const { status } = await Notifications.getPermissionsAsync();
        let finalStatus = status;

        if (finalStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }

        if (finalStatus !== "granted") {
          Alert.alert(
            "Premission is required",
            "push Notification need premission"
          );
          return;
        }

        if (Platform.OS === "android") {
          Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.DEFAULT,
          });
        }

        const pushTokenData = await Notifications.getExpoPushTokenAsync();
        console.log(pushTokenData); // <-- save to database // device
        setToken(pushTokenData.data);
      }

      configurePushNotifications();
    }
  }, []);

  async function sendPushNotificationHandler() {
    try {
      const { data } = await axios.post(
        "https://exp.host/--/api/v2/push/send",
        { to: token, title: "Test from device", body: "this is test" },
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title="Sechdual Notification"
        onPress={schedualNotificationHandler}
      ></Button>
      <Button title="Push" onPress={sendPushNotificationHandler}></Button>
      <Text>Open up App.tsx to start working on your app!</Text>
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
