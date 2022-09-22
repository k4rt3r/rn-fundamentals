import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(1);
    this.state={liked:false};
  }
  shouldComponentUpdate() {
    console.log(2); /* default value:true */
    return true;
  }
  render() {
    console.log(3);
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({ liked: true });
          }}
        >
          <Text>Update Me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(4);
    // console.log('Prev', prevState.liked);
    // console.log('New', this.state.liked);
    //show toast if picture was not liked before
    if (this.state.liked && !this.state.liked) {
      //todo
    }
  }
  componentDidMount() {
    console.log(5);
    /* Gets called when component loads */
    /* Suitable for network calls */
  }
  componentWillUnmount() {
    console.log(6);
    /* Gets called when component is closed */
    /* Suitable for unsubscribing from events, notifications as read, etc */
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
