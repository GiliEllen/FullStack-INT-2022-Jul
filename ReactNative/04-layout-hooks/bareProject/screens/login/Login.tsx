import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { FC } from "react";
import { USERS, User } from "../../data/users";
import { Colors } from "../../util/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface LoginProps {
  navigation:any
}

const Login:FC<LoginProps> = ({navigation}) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const handleLogIn = () => {
    const result = USERS.filter(
      (user) => user.email == email && user.password == password
    );
    console.log(result);
    if (result.length > 0) {
      navigation.navigate("Home");
    }
  };

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondry]}
      style={styles.safeArea}
    >
      <ImageBackground
        source={require("../../assets/images/56491.jpg")}
        resizeMode="cover"
        style={styles.safeArea}
        imageStyle={styles.backgroundImage}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <SafeAreaView style={styles.safeArea}>
            <Text style={styles.header}>Login</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerText}>Enter Email:</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={onChangeEmail}
                value={email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContainerText}>Enter Password:</Text>
              <TextInput
              secureTextEntry={true}
                style={styles.textInput}
                onChangeText={onChangePassword}
                value={password}
              />
            </View>
          </SafeAreaView>
          <Pressable onPress={handleLogIn} style={styles.button}>
            <Text style={styles.buttonTitle}>Login</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 30,
    marginHorizontal: 30,
    borderRadius: 8,
    marginTop: 50,
    height: 400,
  },
  inputContainer: {
    flex: 1,
    padding: 16,
  },
  inputContainerText: {
    color: Colors.fontPrimary,
  },
  textInput: {
    backgroundColor: Colors.secondry,
    borderRadius: 8,
    padding: 16,
    color: Colors.fontPrimary,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    color: Colors.fontPrimary,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  button: {
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    padding: 16,
    backgroundColor: Colors.secondry,
    borderRadius: 8,
  },
  buttonTitle: {
    color: Colors.fontPrimary,
    textAlign: "center",
  },
});
