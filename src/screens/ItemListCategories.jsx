import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
// import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

function ItemListCategories({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const productsFilteredByCategory = useSelector(
    (state) => state.shopReducer.value.productsFilteredByCategory
  );

  // const { category } = route.params;
  // 
  // useEffect(() => {
  //   if (category) {
  //     const products = allProducts.filter((product) => product.category === category);
  //     const filteredProducts = products.filter((product) =>
  //       product.title.includes(keyword)
  //     );
  //     setProducts(filteredProducts);
  //   } else {
  //     const filteredProducts = allProducts.filter((product) =>
  //       product.title.includes(keyword)
  //     );
  //     setProducts(filteredProducts);
  //   }
  // }, [category, keyword]);

  useEffect(() => {
    const productsFiltered = productsFilteredByCategory.filter((product)=> product.title.includes(keyword))
    setProducts(productsFiltered)
  }, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.pageContainer}>
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
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 15,
      fontFamily: 'latoBlack',
      width: "100%",
      height: 40,
      // borderRadius: 10,
      // borderWidth: 2, 
      // borderColor: colors.blue_100,
      // paddingHorizontal: 20,
      // paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.blue_100,
    },
});