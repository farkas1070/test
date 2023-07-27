import { Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { I18nContext } from "../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./DrawerButtonStyle";
const DrawerButton = ({ routeName, iconName, isSelected, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.drawerItem,
        isSelected && { backgroundColor: "#EEEEEE" },
      ]}
      onPress={() => {
        navigation.navigate(routeName);
        onPress(routeName); // Call the onPress function passed from the parent
      }}
    >
      <Ionicons name={iconName} size={24} color="black" style={styles.icon} />
      <Text style={styles.drawerItemText}>{routeName}</Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
