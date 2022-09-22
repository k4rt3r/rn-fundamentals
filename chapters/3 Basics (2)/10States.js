import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends React.Component {
  state = { fav_color: "blue" };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>My fav color is: {this.state.fav_color}</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({fav_color : this.state.fav_color==='blue'?'yellow' : 'blue'});
          }}
        >
          <Text style={{color:this.state.fav_color==='blue'?'yellow' : 'blue'}}>
            Change to {this.state.fav_color==='blue'?'yellow' : 'blue'}
            </Text>
        </TouchableOpacity>
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
});
