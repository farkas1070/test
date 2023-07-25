import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./CardStyle";
import { useNavigation } from "@react-navigation/core";
import Placeholder from "../../../assets/placeholder.png";
const Card = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={() => {
      navigation.navigate("Winery", { item: item });
    }}>
      {/* Image with padding */}
      <View style={styles.imageContainer}>
        <Image
          source={item.logo ? { uri: item.logo } : Placeholder}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Card Title</Text>
        <Text style={styles.description}>This is the description of the card.</Text>
      </View>
    </TouchableOpacity>
   
  );
};

export default Card;
