import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { styles } from "./TopHeaderStyle";
import { Ionicons } from "@expo/vector-icons";
import BackIcon from "../../../assets/wineryassets/backIcon.svg";
import MapIcon from "../../../assets/wineryassets/mapIcon.svg";
import { useNavigation } from "@react-navigation/native";
import Placeholder from "../../../assets/placeholder.png";
import { SafeAreaView } from "react-native-safe-area-context";
const TopHeader = ({ item }) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={item ? { uri: item } : Placeholder}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon width={40} height={40}></BackIcon>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewOnMap}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MapIcon width={30} height={30} style={styles.mapIcon}></MapIcon>
          <Text style={styles.viewOnMapText}>View on Map</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TopHeader;
