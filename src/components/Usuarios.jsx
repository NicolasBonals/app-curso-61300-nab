import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Usuarios = (props) => {
  return (
    <View style={{paddingTop: 20, paddingLeft: 30}}>
    <Text>{props.usuario}</Text>
  </View>
  )
}

export default Usuarios