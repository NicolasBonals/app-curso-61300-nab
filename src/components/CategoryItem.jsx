import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from "../global/colors";

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
        width: 150,
        height: 40,
        backgroundColor: colors.blue_200,
        borderWidth: 2, 
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: "blue",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        elevation: 4,
        borderRadius: 10,
    },
    text:{
        fontSize: 15,
        fontFamily: 'latoBlack',
    },

})
