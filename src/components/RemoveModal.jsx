import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const RemoveModal = ({ modalVisible, setModalVisible, removeItem, itemSelected }) => {
  return (
    <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalContainer}>
        <Text style={styles.text}>
          Quieres quitar el producto de la lista?
        </Text>
        <Pressable onPress={() => setModalVisible(false)}>
          <Text style={styles.text}>No</Text>
        </Pressable>
        <Pressable onPress={() => removeItem(itemSelected)}>
          <Text style={styles.text}>Sí</Text>
        </Pressable>
      </View>
    </Modal>
  );
};


export default RemoveModal;

const styles = StyleSheet.create({

  modalContainer:{
    position: 'absolute',
    bottom: 0, // Alinea el modal en la parte inferior
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: 'white', // Color de fondo del modal
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: 'black',
    fontSize: 18,
  }
});
