import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import * as Notifications from "expo-notifications";
import { useEffect } from "react";

export default function App() {
  const schedualNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "my first local",
        body: "this is the body",
        data: {userName: "Gili", id: 1}
      },
      trigger: {
        seconds: 3,

      },
    });
  };

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {

        if (notification.request.content.data.id === 1)  {
          console.log("got notification");
          console.log(notification.request.content.data.userName);
        } else {
          console.log("this")
        }
        
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Sechdual Notification"
        onPress={schedualNotificationHandler}
      ></Button>
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
