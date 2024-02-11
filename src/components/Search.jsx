import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import { AntDesign } from "@expo/vector-icons"
 


const Search = ({ keyword, onSearch }) => {
  
  // const search = () =>{
  //   onSearch(input);
  // }

  // const removeInput = () =>{
  //   setInput("");
  // }

    return (
    <View style={styles.container}>
        <View style={styles.otro}>
          <TextInput
            style={styles.input}
            onChangeText={onSearch}
            value={keyword}
            placeholder='Buscar producto...'
          />
          
          <Pressable onPress={onSearch}>
            <AntDesign name="search1" size={25} color="black"/>
          </Pressable>
        </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        flexDirection: 'row',
    },
    otro:{
      flexDirection:'row', 
      justifyContent: 'center', 
      alignContent: 'center',
      paddingTop: 20,
    },
    input:{
        borderRadius: 2,
        padding: 2,
        paddingLeft: 5,
        borderWidth: 1,
        width: "80%",
        fontSize: 20,
        marginTop: 40,
    }
})