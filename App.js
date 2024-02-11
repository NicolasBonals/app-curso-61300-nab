// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Pressable} from 'react-native';
// import { useState } from 'react';
// import imagenEjemplo from './assets/imagenEjemplo.jpg';
// import cartIcon from './assets/cartIcon.png';
// import Constants from 'expo-constants';
// import RemoveModal from './src/components/RemoveModal';
// import CounterComponent from './src/components/CountComponent';
// import FlatListComponent from './src/components/FlatList';
import { useState } from 'react';
import { useFonts } from "expo-font"; 

import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import { fonts } from './src/global/fonts';




export default function App() {
  
  // const [inputValue, setInputValue] = useState('');
  // const [cartItems, setCartItems] = useState([]);
  // const [itemSelected, setItemSelected] = useState(null);
  // const [modalVisible, setModalVisible] = useState(false);

  // const handleInputValue = (value) => setInputValue(value);

  // const removeItem = () => {
  //     const filteredArray = cartItems.filter((item)=> item.id !== itemSelected )
  //     setCartItems(filteredArray);
  //     setModalVisible(false);
  //   }

    
  // const addItem = () => {
  //   const newItem = {
  //     name: inputValue,
  //     id: new Date().getTime(),
  //   }

  //   setCartItems([...cartItems, newItem])
  // }
  
  const [categorySelected, setCategorySelected] = useState("");
  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded){
    return null
  }

  return (
  <>
  {categorySelected ? (
    <ItemListCategories setCategorySelected={setCategorySelected}/>
    )
   : (
     <Home setCategorySelected={setCategorySelected}/>
  )}
   
   
  </>
  )
    // <View>
      
      /* <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: 'https://img.freepik.com/vector-gratis/marco-fondo-azul-fluido_53876-99019.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1706918400&semt=ais'}}>
      <View style={styles.container}>
        <StatusBar style='auto'/>

        <View style={{flexDirection: 'row', justifyContent: 'flex-end', gap: 8, alignItems: 'center'}}>

      
          <Text> Carrito </Text>
                  <Image style={{width: 50, height: 50}} source={cartIcon}/>
          </View>

              <Image style={{width: 300, height: 300}} source={imagenEjemplo}/>
          <View style={{flexDirection: 'row', justifyContent: 'center', gap: 8, alignItems: 'center'}}>
            
            <TextInput onChangeText={handleInputValue} value={inputValue}  style={{borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10, width: 200, margin: 10 }} placeholder='Ingrese un producto' />
            <Pressable onPress={addItem}>
              <Text style={{fontSize: 40}}>+</Text>
            </Pressable>
          </View>

        <View style={styles.productsContainer}>
        
        <RemoveModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          removeItem={removeItem}
          itemSelected={itemSelected}
        />
          <CounterComponent />
          <FlatListComponent cartItems={cartItems} setModalVisible={setModalVisible} setItemSelected={setItemSelected} />
        </View>
        
        
      </View>
      </ ImageBackground> */
    // </View>
}

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Constants.statusBarHeight, 
//     paddingLeft: 30,  
//     flex: 1
//   },

//   productsContainer:{
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },

//   products:{
//     fontSize: 16,
//     fontWeight: "bold",
//     padding: 4,
//     borderRadius: 4,
//     borderBlockColor: "red",
//   },

// });
