import { Text, TouchableOpacity,View } from "react-native";
import React, { useContext } from "react";
import { I18nContext } from "../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import Catamaran from "../fonts/Catamaran-Regular.ttf";
import { styles } from "./DrawerButtonStyle";

const DrawerButton = ({ routeName, icon, isSelected, onPress }) => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    Catamaran: Catamaran,
  });
  if (!loaded) {
    return null; // Return null or a loading screen until the font is loaded
  }
  return (
    <TouchableOpacity
      style={[styles.drawerItem, isSelected && { backgroundColor: "#EEEEEE" }]}
      onPress={() => {
        navigation.navigate(routeName);
        onPress(routeName); // Call the onPress function passed from the parent
      }}
    >
      <View>
      {icon}
      </View>
      <Text style={[styles.drawerItemText, { fontFamily: "Catamaran",fontWeight:'500' }]}>
        {routeName}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerButton;
