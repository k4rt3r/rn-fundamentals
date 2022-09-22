import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

export function ProfileScreen ({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Profile screen</Text>
        <Button title="Go to home"
        onPress={()=> navigation.navigate('Home')} />
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