import { View, Text, Pressable, FlatList, StyleSheet } from "react-native"

const FlatListComponent = ({cartItems, setModalVisible, setItemSelected}) =>{

    const handleModal =(id) => {
        setModalVisible(true);
        setItemSelected(id);
      };

    return(
        <View>
            <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <View style={{flexDirection: 'row' }} key={item.id}>
                        <Text style={styles.products}>{item.name}</Text>
                        <Pressable onPress={()=>handleModal(item.id)}>
                            <Text style={{padding: 4}}>Quitar</Text>
                        </Pressable>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    />

        </View>
    );
};

export default FlatListComponent;

const styles = StyleSheet.create({
    products:{
        fontSize: 16,
        fontWeight: "bold",
        padding: 4,
        borderRadius: 4,
        borderColor: "blue",
        borderWidth: 2,
    },
  });