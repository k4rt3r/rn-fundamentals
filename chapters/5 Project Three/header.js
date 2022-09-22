import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={[styles.header, { flexDirection: "row" }]}>
      <Text style={[styles.headerLabel, { flex: 1 }]}>Like it</Text>
      <FontAwesome name="heart" size={24} color="red"/>
      <Text style={[styles.headerLabel, { marginLeft: 5 }]}>{props.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems:'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "black",
    backgroundColor: "#D0CEE2",
  },
  headerLabel: {
    fontSize: 24
  },
});

export default Header;