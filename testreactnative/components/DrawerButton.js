import { Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { I18nContext } from "../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeIcon from "../assets/navigatorassets/Home";
import WineriesIcon from "../assets/navigatorassets/Wineries";
import EventsIcon from "../assets/navigatorassets/Events";
import NewsIcon from "../assets/navigatorassets/News";

import { styles } from "./DrawerButtonStyle";
const DrawerButton = ({ routeName, icon, isSelected, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.drawerItem, isSelected && { backgroundColor: "#EEEEEE" }]}
      onPress={() => {
        navigation.navigate(routeName);
        onPress(routeName); // Call the onPress function passed from the parent
      }}
    >
      {icon}
      <Text style={styles.drawerItemText}>{routeName}</Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
