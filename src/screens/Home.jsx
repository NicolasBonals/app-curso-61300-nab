import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { colors } from "../global/colors";



function Home ({setCategorySelected}) {
    return(
        <View style={styles.pageContainer}>
            <Header title={'inicio'}/>
            <Categories setCategorySelected={setCategorySelected}/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    pageContainer: {
      flex: 1, 
      backgroundColor: colors.hex_100, 
      justifyContent: 'center',
      alignItems: 'center',
    },
});