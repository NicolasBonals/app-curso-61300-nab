import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";

const ProductItem = ({ product, navigation }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const { width, height } = useWindowDimensions();

  console.log(width, height);

  useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width, height]);

  return (
    <>
      <Pressable style={styles.card} onPress={() => navigation.navigate("ItemDetail", {id: product.id})}>
        <Card
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={width < 350 ? styles.textMin : styles.text}>{product.title}</Text>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: product.thumbnail }}
          />
        </Card>
      </Pressable>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    width: "70%",
  },
  textMin: {
    fontSize: 14,
    width: "70%",
  },
  image: {
    width: 70,
    height: 70,
  },
});