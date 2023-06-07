import { View, Text, TextInput, Button, Pressable, StyleSheet } from "react-native";
import React from "react";
import {User, USERS} from "../../data/users"
import Header from "../../components/Header/Header";

const Login = ({navigation}:any) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const handleLogIn = () => {
    const result = USERS.filter((user) => user.email == email && user.password == password);
    console.log(result)
    if (result.length > 0) {
      navigation.navigate("Home")
    }
  }

  return (
    <View style={styles.container}>
      <Header>Login</Header>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Enter Email:</Text>
        <TextInput onChangeText={onChangeEmail} value={email} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Enter Password:</Text>
        <TextInput secureTextEntry={true} onChangeText={onChangePassword} value={password} />
      </View>
      <Button title="Log in" onPress={handleLogIn}/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c0a5f',
  },
  inputContainer: {
    padding:16,
  },
  inputText : {
    color: '#fff'
  }
})
