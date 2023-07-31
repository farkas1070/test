import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./CardStyle";
import { useNavigation } from "@react-navigation/core";
import Placeholder from "../../../assets/placeholder.png";

const Card = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("Event", { item: item })}
    >
      {/* Image */}
      <Image
        source={item.image ? { uri: item.image } : Placeholder}
        style={styles.cardImage}
        resizeMode="cover"
      />

      {/* Title */}
      <Text style={styles.cardTitle}>{item.title}</Text>

      {/* Description */}
      <Text style={styles.cardDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
        turpis at posuere commodo, lectus sem hendrerit nisi, id rutrum quam
        nunc eu turpis.
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
