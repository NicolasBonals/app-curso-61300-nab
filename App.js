import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Pressable, FlatList, Modal } from 'react-native';
import { useState } from 'react';
import Usuarios from './src/components/Usuarios';
import imagenEjemplo from './assets/imagenEjemplo.jpg';
import cartIcon from './assets/cartIcon.png';
import Constants from 'expo-constants';



export default function App() {
  
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  
  const handleAddCounter = () => setCounter(counter + 1);
  const handleInputValue = (value) => setInputValue(value);
  const handleModal =(id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    }

    setCartItems([...cartItems, newItem])
  }


  // const Data = [
  //   {
  //     name: "Producto1",
  //     id: 1,
  //   },
  //   {
  //     name: "Producto2",
  //     id: 2,
  //   },
  //   {
  //     name: "Producto3",
  //     id: 3,
  //   },
  //   // {
  //   //   name: "Producto1",
  //   //   id: 4,
  //   // },
  //   // {
  //   //   name: "Producto2",
  //   //   id: 5,
  //   // },
  //   // {
  //   //   name: "Producto3",
  //   //   id: 6,
  //   // },{
  //   //   name: "Producto1",
  //   //   id: 7,
  //   // },
  //   // {
  //   //   name: "Producto2",
  //   //   id: 8,
  //   // },
  //   // {
  //   //   name: "Producto3",
  //   //   id: 9,
  //   // },{
  //   //   name: "Producto1",
  //   //   id: 10,
  //   // },
  //   // {
  //   //   name: "Producto2",
  //   //   id: 11,
  //   // },
  //   // {
  //   //   name: "Producto3",
  //   //   id: 12,
  //   // },
  // ];

  const removeItem = () => {
    const filteredArray = cartItems.filter((item)=> item.id !== itemSelected )
    setCartItems(filteredArray);
    setModalVisible(false);
  }
  
  const RemoveModal = ()=> {

    
    return (
    <Modal animationType="slide" transparent visible={modalVisible} onRequestClose>
      <View>
        <Text style={styles.modalContainer}>
          Quieres eliminar el producto?
        </Text>
        <Pressable onPress={()=>setModalVisible(false)}><Text>No</Text></Pressable>
        <Pressable onPress={()=>removeItem(itemSelected)}><Text>Sí</Text></Pressable>

      </View>

    </Modal>
    );
  };
   
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <RemoveModal />
        
        {/* <ImageBackground style={{width: 500, height: 500}} source={{uri: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/29/16933298615638.jpg'}}> */}
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', gap: 8, alignItems: 'center'}}>

        <Text> Hola <Usuarios usuario="Nico"/> </Text>
    
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
        {/* {DATA.map((item)=> (
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>
        ))} */}
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={{flexDirection: 'row' }} key={item.id}>
              <Text style={styles.products}>{item.name}</Text>
              <Pressable onPress={()=>handleModal(item.id)}>
                <Text>Eliminar</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      
      {/* </ ImageBackground> */}
      <StatusBar style="auto" />
      <Pressable onPress={handleAddCounter}>
        <Text style={{fontSize: 20}}>{counter}</Text>
      </Pressable>
      <Text>Valor del input: {inputValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight, 
    paddingLeft: 30, 
    backgroundColor: 'aqua', 
    flex: 1
  },

  productsContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  // modalContainer:{
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex: 10,
  // },

  products:{
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },

});
