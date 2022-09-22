import React, {useEffect, useState, useCallback} from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from "react-native";

const App = () => {
  const [value, setValue]=useState(10);
  const [result, setResult]=useState(0);

  const handler= useCallback(()=>{
    setResult(value+10);
  }, [value]);

  useEffect(()=>{
    setTimeout((()=>setValue(50)),1000);
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button title="Submit" onPress={handler}/>
      <Text>Value: {value}</Text>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "white",
  },
});

export default App;
