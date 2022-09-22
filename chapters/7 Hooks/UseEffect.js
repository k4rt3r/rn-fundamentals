import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const App = () => {
  const [value, setValue]= useState();
  const [name, setName]= useState();
  //mocking componentdidmount, componentdidupdate and componentwillunmount
  //all 3 functions can be mocked with useEffect
  //componentdidmount when empty array

  useEffect(() =>{
    console.log('did mount')
    setTimeout(()=> setValue(100),8000);
    setTimeout(()=> setName('Omar'),5000);
  },[]) //component Did Mount

  useEffect(() =>{
    console.log('value updated:', value);
  },[value, name]) //component Did update

  useEffect(() =>{
    return()=>{
        console.log('unmounting');
    };
  },[]) //component Did update


  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
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
