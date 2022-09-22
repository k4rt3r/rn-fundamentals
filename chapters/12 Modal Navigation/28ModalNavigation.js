import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./chapters/11 Stack Navigation/Home";
import { ProfileScreen } from "./chapters/11 Stack Navigation/Profile";

const Stack = createNativeStackNavigator();
const Root = createNativeStackNavigator();

function MainStackScreen(){
  return(
    <Stack.Navigator>
      <Root.Screen name="Home" component={HomeScreen} />
      <Root.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
    );
}

function App() {
  return (
    <NavigationContainer>
      <Root.Navigator mode="modal">
        <Stack.Screen name="MainStack" options={{headerShown:false}} component={MainStackScreen} />
        <Stack.Screen name="Profile" component={MainStackScreen} />
      </Root.Navigator>
    </NavigationContainer>
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

export default App;