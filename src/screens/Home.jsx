import { View, StyleSheet } from "react-native";
// import Header from "../components/Header";
import Categories from "../components/Categories";
import { colors } from "../global/colors";

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Categories navigation={navigation}/>
      </View>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: colors.blue_100, 
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
});