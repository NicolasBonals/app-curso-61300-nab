import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container,...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 4,
        paddingLeft: 10,
    },
    text:{
        fontSize: 25,
    },

})