import { Text, StyleSheet } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category}) => {
  return (
    <>
        <Card style={{paddingTop: 10}}>
            <Text style={styles.text}>{category}</Text>
        </ Card>
       
    </>
        
    
  )
}

export default CategoryItem

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
    },
    text:{
        fontSize: 15,
    },

})
