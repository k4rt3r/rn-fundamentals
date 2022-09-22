import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";

export function HomeScreen ({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Button title="Go to profile"
        onPress={()=> navigation.navigate('Profile')} />
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