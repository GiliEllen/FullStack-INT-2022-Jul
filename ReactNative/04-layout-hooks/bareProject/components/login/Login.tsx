import { View, Text, TextInput } from "react-native";
import React from "react";

const Login = () => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View>
      <View>
        <Text>Enter Email:</Text>
        <TextInput onChangeText={onChangeEmail} value={email} />
      </View>
      <View>
        <Text>Enter Password:</Text>
        <TextInput onChangeText={onChangePassword} value={password} />
      </View>
    </View>
  );
};

export default Login;
