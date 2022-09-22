import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

export default class App extends React.Component {
  state = { show_result: false };

  render() {
    return (
      <View style={styles.container}>
        <Text>What is 1 + 1?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ show_result: true });
          }}
        >
          <Text>Show answer</Text>
        </TouchableOpacity>
        {this.state.show_result ? <Text>It is Equal 2</Text> : null}{/* conditional rendering */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
  },
});
