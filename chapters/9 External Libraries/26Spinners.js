import React, { useState, useEffect } from "react";
import { View, StyleSheet, Linking } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export default function App() {
  return (
    <View style={styles.container}>
      <Spinner
        visible={true}
        textContent={"Loading.."}
        textStyle={styles.spinnerTextStyle}
      />
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