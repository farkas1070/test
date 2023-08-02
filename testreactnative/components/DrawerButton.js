import { Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./DrawerButtonStyle";
import { FontsContext } from "../context/GlobalContext";
const DrawerButton = ({ routeName, icon, isSelected, onPress }) => {
  const navigation = useNavigation();
  const fontsLoaded = useContext(FontsContext);
  

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={[styles.drawerItem, isSelected && { backgroundColor: "#EEEEEE" }]}
      onPress={() => {
        navigation.navigate(routeName);
        onPress(routeName);
      }}
    >
      {icon}
      <Text style={[styles.drawerItemText, { fontFamily: "Catamaran" }]}>
        {routeName}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
