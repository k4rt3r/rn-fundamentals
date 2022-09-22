import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

const App = () => {
const openTelApp = () => Linking.openURL("tel:+123456789");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{padding:20, borderWidth:1}} onPress={openTelApp}>
        <Text>Open Tel</Text>
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