import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends React.Component {
  state={};
  render() {
    /* First way */
    const person={};
    person.name='John';
    person.surname='Smith';
    person.age=34;
    person.gender='male';

    /* Second way */
    const ageValue=person.age;
    const genderValue=person.gender;//Object copy by value
    
    /* Third way (Spreading)*/
    const {age, gender, name, surname} = person;//Object copy and value spread

    /* Fourth way (Spreading 2)*/
    const person2={...person, age:21};//Object copy and value spread, overriding age to 21

    return (

      <View style={styles.container}>
        <Text>{person.name}</Text>
        <Text>{person2.surname}</Text>
        <Text>{ageValue}</Text>
        <Text>{gender}</Text>
      </View>
    );
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
