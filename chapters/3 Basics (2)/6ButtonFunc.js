import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

/* Props on a function and core styles, style array, style condition */

const Button = ({title, style, outlined})=>{
    return (
      <TouchableOpacity style={[styles.core, outlined? styles.outlined : styles.filled, style]} >
        <Text style={{color:outlined? 'blue' : 'white'}}>{title}</Text>
      </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
  core:{
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent:'center',
    alignItems:'center',
  },
  filled:{
    backgroundColor:'grey'
  },
  
  outlined:{
    backgroundColor:'white'
  }
}) 


export default Button;
