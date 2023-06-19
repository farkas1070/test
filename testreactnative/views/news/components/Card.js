import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./CardStyle";
import Placeholder from "../../../assets/placeholder.png";
import { useNavigation } from "@react-navigation/core";

const Card = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("New", { item: item })}
    >
      <View key={index} style={styles.card}>
        <View>
          <Image
            style={styles.image}
            source={item.image ? { uri: item.image } : Placeholder}
          />
        </View>

        <Text numberOfLines={3} style={{ lineHeight: 30, textAlign: "center" }}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
