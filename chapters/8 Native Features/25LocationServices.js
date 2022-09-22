import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet, Button, TouchableOpacity, Linking } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const coords="";

 const navigateToMaps = ()=>{
  Linking.openURL("http://maps.apple.com/maps?daddr='"+coords);
}

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToMaps}>
        <Text>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});