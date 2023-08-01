import { Image, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./TopHeaderImageStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Placeholder from "../assets/placeholder.png";
import { SafeAreaView } from "react-native-safe-area-context";
import BackIcon from "../assets/wineryassets/backIcon.svg";
const TopHeaderImage = ({ item }) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={item ? { uri: item } : Placeholder}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <BackIcon width={40} height={40} style={styles.backButton}></BackIcon>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TopHeaderImage;
