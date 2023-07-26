import { Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./TopHeaderImageStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Placeholder from "../assets/placeholder.png"
const TopHeaderImage = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={item ? { uri: item } : Placeholder} />
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={30} color="#696969" />
      </TouchableOpacity>
    </View>
  );
};

export default TopHeaderImage;
