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
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, {alignItems:'center', justifyContent:'center'}]}>
          <Text>Hello World</Text>
          <Ionicons name="md-checkmark-circle" size={32} color="green"/>
          <FontAwesome5 name="fonticons" size={24} color="black"/>
          <Entypo name="aircraft" size={24} color="black"/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop:40,
    backgroundColor: "lightblue",
  },
});
