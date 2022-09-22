import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";

export default class App extends React.Component {
  state={ color:'red'};

  onChangedTextHandler = (text) =>{
     this.setState({ value: text })
  }

  handleOnpress = () => this.setState({color:'blue'});

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangedTextHandler}
        />
        <TouchableOpacity style={{marginTop:20}} onPress={this.handleOnpress}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20, color: this.state.color }}>{this.state.value}</Text>
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
  input: {
    width: 300,
    borderColor: "grey",
    borderWidth: 1,
    marginTop: 20,
  },
});
