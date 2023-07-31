import { Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { I18nContext } from "../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./DrawerButtonStyle";
import { useFonts } from "expo-font";
import Catamaran from "../fonts/Catamaran-Regular.ttf";
const DrawerButton = ({ routeName, icon, isSelected, onPress }) => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    Catamaran: Catamaran,
  });

  if (!loaded) {
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
