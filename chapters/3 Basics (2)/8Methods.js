import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


/* There are two ways of declaring functions in RN: */
function printHello(name){
  console.log('Hey '+name+'!');
}
const printHello2 = ()=>{  
  console.log('I am an arrow function');
}

/************************************************** */

export default function App() {
  printHello('joan');
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <TouchableOpacity>
        <Text onPress={printHello2}>Hello</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
