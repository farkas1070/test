import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./CardStyle";
import { useNavigation } from "@react-navigation/core";
import Placeholder from "../../../assets/placeholder.png";
import LocationIcon from "../../../assets/wineryassets/locationIcon.svg"
const Card = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("Winery", { item: item });
      }}
    >
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
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.connection.adress}</Text>
        </View>
        <View>
          <Text style={styles.phonetext}>
            {item.connection.telephone == ""
              ? "nincs telefon"
              : item.connection.telephone}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
