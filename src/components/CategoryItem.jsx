import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category, setCategorySelected}) => {
  return (
    <>
        <Card style={styles.container}>
            <Pressable onPress={()=> setCategorySelected(category)}>
                <Text style={styles.text}>{category}</Text>
            </Pressable>
            
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
        borderRadius: 10,
    },
    text:{
        fontSize: 15,
        fontFamily: 'latoBlack',
    },

})
