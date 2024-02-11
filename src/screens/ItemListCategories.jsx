import { View, FlatList, Pressable, Text } from "react-native";
import React, { useState, useEffect} from "react";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import Header from "../components/Header";


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
        <View> 
            <Header title={category}/>
            <Search keyword={keyword} onSearch={setKeyword}/>
            <FlatList
                data={products}
                renderItem={({item}) => <ProductItem product={item}/>}
                keyExtractor={(item)=>item.id}
            />
            <Pressable onPress={()=> setCategorySelected()}>
                <Text>Volver Atras</Text>
            </Pressable>
        </View>

        
    );
};

export default ItemListCategories;