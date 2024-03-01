import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../global/colors";

function ItemListCategories({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { category } = route.params;

  useEffect(() => {
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

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