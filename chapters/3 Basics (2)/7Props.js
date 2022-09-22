import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./6buttonFunc";

/* Props on components App.js */

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button title="Next" style={{ marginBottom: 20 }} outlined={true}/>
      <Button title="Back"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
