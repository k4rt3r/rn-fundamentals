import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Avatar from "./4Components";

/* Avatar component */

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Avatar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#ccc",
  },
});
