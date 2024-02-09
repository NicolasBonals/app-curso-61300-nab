import { View, Text, FlatList, StyleSheet } from "react-native";
import categories from '../data/categories.json';
import CategoryItem from "./CategoryItem";



const Categories = () => {
    return(
        <View>
            <FlatList
            data={categories}
            renderItem={({ item }) => (
                <CategoryItem category = {item}/>
            )}
            keyExtractor={(category) => category}
            />
        </View>
    ); 
};

export default Categories;