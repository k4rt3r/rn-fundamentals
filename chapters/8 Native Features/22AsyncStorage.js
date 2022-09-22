import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

/* Does not work properly */

const App = () => {
  const [text, setText] = useState();

  useEffect(() => {
    getItem();
  },[]);

  const onChange = (text) => {
    setText(text);
  };

  const getItem = async () => {
    const res = await AsyncStorage.getItem("myKey");
  };

  const onSubmit = () => {
    AsyncStorage.setItem("myKey", text);
  };

  return (
    <View style={styles.container}>
      <Text>Text from storage:</Text>
      <Text>-</Text>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        value={text}
      ></TextInput>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default App;