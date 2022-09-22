import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const App = () => {
  const [value, setValue] = useState(40);
  const [value2, setValue2] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{marginBottom:20, fontSize:22}}>Value: {value}</Text>
      <TouchableOpacity onPress={()=>setValue(value+10)}>
        <Text>Add 10</Text>
      </TouchableOpacity>
      <Text style={{margin:20, fontSize:22}}>Value 2: {value2}</Text>
      <TouchableOpacity onPress={()=>setValue2(value2+10)}>
        <Text>Add 10</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "white",
  },
});

export default App;
