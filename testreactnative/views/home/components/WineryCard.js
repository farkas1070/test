import { Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { styles } from "./WineryCardStyle";
import Placeholder from "../../../assets/placeholder.png";
import { FontsContext } from "../../../context/GlobalContext";
const WineryCard = ({ item }) => {
  const fontsLoaded = useContext(FontsContext);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.carouselImage}
          source={item.logo ? { uri: item.logo } : Placeholder}
        />
      </View>
      <View style={styles.textContainer}>
      <Text style={[styles.titleText,{fontFamily:'HKGrotesk'}]}>{item.title}</Text>
      </View>
    </View>
  );
};

export default WineryCard;
