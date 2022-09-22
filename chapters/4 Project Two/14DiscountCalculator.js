import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  Touchable,
} from "react-native";

export default class App extends React.Component {
  state = { amount: 0, discount: 0, result: 0 };

  OnAmountChange = (text) => {
    this.setState({ amount: text });
  };

  OnDiscountChange = (text) => {
    this.setState({ discount: text });
  };

  OnButtonPress = () =>
    this.setState({
      result: this.state.amount * (this.state.discount / 100),
    });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: "center", marginTop: 80 }}>
          <Text style={{ fontSize: 22 }}>Discount calculator</Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <View style={styles.item}>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.OnAmountChange}
            ></TextInput>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Discount (%)</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.OnDiscountChange}
            ></TextInput>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Amount after discount</Text>
            <TextInput style={[styles.lowerInput, {color:this.state.result ? 'green' : 'black'}]}>
              {this.state.result?this.state.amount - this.state.result:null}
            </TextInput>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.OnButtonPress}>
            <Text style={{ color: "white" }}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "lightblue",
  },
  item: {
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "clearblue",
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    height: 60,
    width: 250,
    paddingHorizontal: 10,
  },
  lowerInput: {
    backgroundColor: "#b3ddb1",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    height: 60,
    width: 250,
    paddingHorizontal: 10,
  },
});
