import React from 'react';
import {View} from 'react-native';

/* Avatar by name or default export */

export const Avatar = ()=>{
    return <View style={{height:50, width:50, borderRadius:25, backgroundColor:'green'}}></View>
}

export const AvatarDefault = ()=>{
    return <View style={{height:50, width:50, borderRadius:25, backgroundColor:'red'}}></View>
}

export default AvatarDefault;