import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default Header;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.blue_100,
        width: '100%',
        paddingVertical: 60,
        
    },
    text:{
        fontSize: 30,
        color: "red",
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 60,
    }

})