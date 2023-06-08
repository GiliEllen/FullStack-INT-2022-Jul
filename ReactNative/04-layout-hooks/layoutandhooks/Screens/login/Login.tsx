import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React from "react";
import { User, USERS } from "../../data/users";
import Header from "../../components/Header/Header";
import { LinearGradient } from "expo-linear-gradient";



const Login = ({ navigation }: any) => {
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
    <LinearGradient colors={["#2c0a5f", "#4f1a9e"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../../assets/images/56491.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* <View style={styles.filler}></View> */}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
          <SafeAreaView style={styles.rootScreen}>
            <Header>Login</Header>
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
                onChangeText={onChangePassword}
                value={password}
                style={styles.textInput}
              />
            </View>
          </SafeAreaView>
          <Pressable style={styles.button} onPress={handleLogIn}>
            <Text style={styles.buttonTitle}>Log In</Text>
          </Pressable>
        </KeyboardAvoidingView>
        {/* <View style={styles.filler}></View> */}
      </ImageBackground>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#2c0a5f",
    padding: 30,
    marginHorizontal: 30,
    borderRadius: 8,
    marginTop: 50,
    height: 500
  },
  filler: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    backgroundColor: "#4f1a9e",
    borderRadius: 8,
    padding: 16,
    color: "#fff",
  },
  inputContainerText: {
    color: "#fff",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  button: {
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    width: 100,
    padding: 16,
    backgroundColor: "#4f1a9e",
    borderRadius: 8
  },
  buttonTitle: {
    color: '#fff',
    textAlign: 'center'
  }
});
