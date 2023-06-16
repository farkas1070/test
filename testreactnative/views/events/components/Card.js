import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./CardStyle";
import { useNavigation } from "@react-navigation/core";
import Placeholder from "../../../assets/placeholder.png";

const Card = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Event", { item: item })}
    >
      <View key={index} style={styles.singlenews}>
        <Image
          style={styles.image}
          source={item.image ? { uri: item.image } : Placeholder}
        />
        <View style={styles.innerview}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
