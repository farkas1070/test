import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./CardStyle";
import { useNavigation } from "@react-navigation/core";

const Card = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <View key={index} style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Winery", { item: item })}
      >
        <Image style={styles.image} source={{ uri: item.logo }} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
