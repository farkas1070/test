import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./WineryCardStyle";
import Placeholder from "../../../assets/placeholder.png";
import { FontsContext } from "../../../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
const WineryCard = ({ item }) => {
  const fontsLoaded = useContext(FontsContext);
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate("Winery", { item: item });
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.carouselImage}
          source={item.logo ? { uri: item.logo } : Placeholder}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.titleText, { fontFamily: "HKGrotesk" }]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WineryCard;
