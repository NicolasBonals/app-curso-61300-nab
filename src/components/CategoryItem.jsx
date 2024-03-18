import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()

  return (
    <Pressable onPress={() => {
      dispatch(setCategorySelected(category))
      navigation.navigate("ItemListCategories", {category})
      }}>
      <Card style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;


const styles = StyleSheet.create({
    
    container:{
        width: 150,
        height: 40,
        backgroundColor: colors.blue_200,
        borderWidth: 2, 
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center', 
        shadowColor: "blue",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        elevation: 4,
        borderRadius: 10,
    },
    text:{
        fontSize: 15,
        fontFamily: 'latoBlack',
    },

})
