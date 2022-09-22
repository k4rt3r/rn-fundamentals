import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [text, setText] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const res = await AsyncStorage.getItem("myKey");
    setResult(res);
  };

  const onChange = (text) => {
    setText(text);
  };

  const onSubmit = (text) => {
    AsyncStorage.setItem("myKey");
    Alert.alert('Done!', 'The value has been stored in the storage',[
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text>Text from storage: </Text>     
      <Text>{result ? result : '-'}</Text>    
      <TextInput onChangeText={onChange} style={styles.input} value={text}></TextInput>
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
});

export default App;
