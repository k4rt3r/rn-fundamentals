import React from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  console.log("starting script...");
  setTimeout(()=>{
      //do the download
      console.log("file downloaded");
  }, 1000);
  console.log("done");

  return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "white",
  },
});

export default App;
