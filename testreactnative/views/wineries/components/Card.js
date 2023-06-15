import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./CardStyle";

const Card = ({ item, index }) => {
  return (
    <TouchableOpacity>
      <View key={index} style={styles.card}>
        <Image style={styles.image} source={{ uri: item.logo }} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
