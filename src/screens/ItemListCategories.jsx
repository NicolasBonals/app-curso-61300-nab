import { View, FlatList, Pressable, Text, StyleSheet } from "react-native";
import React, { useState, useEffect} from "react";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import Header from "../components/Header";
import { colors } from "../global/colors";

const ItemListCategories =({category, setCategorySelected}) => {
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
    
    useEffect(() => {
        if(category) {
            const products = allProducts.filter((product) => product.category === category);
            const filteredProducts = products.filter((product) => product.title.includes(keyword));
            setProducts(filteredProducts);
        }
    }, [category, keyword]);
    
    return (
        <View style={styles.pageContainer}> 
            <Header title={category}/>
            <Search keyword={keyword} onSearch={setKeyword}/>
            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem product={item}/>}
                keyExtractor={(item)=>item.id}
            />
            <Pressable onPress={()=> setCategorySelected()}>
                <Text style={styles.text}>Volver Atras</Text>
            </Pressable>
        </View>

        
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    pageContainer: {
      flex: 1, 
      backgroundColor: colors.blue_200, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
        fontSize: 15,
        fontFamily: 'latoBlack',
        width: 150,
        height: 40,
        borderRadius: 10,
        borderWidth: 2, 
        borderColor: colors.blue_100,
        paddingHorizontal: 20, // Ajusta el espacio horizontal
        paddingVertical: 10, // Ajusta el espacio vertical
        justifyContent: 'center',
        alignItems: 'center',
    },
});