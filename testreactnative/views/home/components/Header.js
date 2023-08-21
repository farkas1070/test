import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./HeaderStyle";
import MenuIcon from "../../../assets/menuassets/Menu.svg";
import { SvgCssUri } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "../../../assets/homepageicons/searchIcon.svg"
const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.menuButton}
        >
          <MenuIcon width={30} height={30}></MenuIcon>
        </TouchableOpacity>
        <SvgCssUri
          uri={
            "https://soproniborvidek.hu/wp-content/uploads/2020/11/soproniborvidek_logo_color_fekvo.svg"
          }
          width={150}
          height={40}
        />
        <TouchableOpacity style={styles.searchbutton} onPress={() => {}}>
          <SearchIcon width={16} height={16}></SearchIcon>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
