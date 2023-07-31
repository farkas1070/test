import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Linking, Image, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./CustomDrawerStyle";
import { useNavigation } from "@react-navigation/native";
import { I18nContext } from "../context/GlobalContext";
import DrawerButton from "./DrawerButton";
import Subtract from "../assets/menuassets/Subtract.svg";
import Subtract2 from "../assets/menuassets/Subtract2.svg";
import Subtract3 from "../assets/menuassets/Subtract3.svg";
import HomeIcon from "../assets/navigatorassets/Home";
import WineriesIcon from "../assets/navigatorassets/Wineries";
import EventsIcon from "../assets/navigatorassets/Events";
import NewsIcon from "../assets/navigatorassets/News";
import SettingsIcon from "../assets/menuassets/Settings";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const [i18n, setI18n] = useContext(I18nContext);
  const [selectedItem, setSelectedItem] = useState(i18n.t("home")[0]);

  const handleItemPress = (item) => {
    setSelectedItem(item); // Update the selected item when a drawer button is pressed
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.circlesContainer}>
          <View style={styles.yellowCircleContainer}>
            <Subtract width={142} height={142} />
          </View>
          <View style={styles.redCircleContainer}>
            <Subtract2 width={142} height={142} />
          </View>
          <View style={styles.purplecircleContainer}>
            <Subtract3 width={170} height={170} />
          </View>
        </View>

        <View
          style={{
            textAlign: "center",
          }}
        >
          <View style={{ textAlign: "center", padding: 10 }}>
            <DrawerButton
              routeName={i18n.t("home")[0]}
              icon={<HomeIcon width={24} height={24} />}
              isSelected={selectedItem === i18n.t("home")[0]}
              onPress={() => {
                handleItemPress(i18n.t("home")[0]);
              }}
            />
            <DrawerButton
              routeName={i18n.t("wineries")}
              icon={<WineriesIcon width={24} height={24} />}
              isSelected={selectedItem === i18n.t("wineries")}
              onPress={() => {
                handleItemPress(i18n.t("wineries"));
              }}
            />
            <DrawerButton
              routeName={i18n.t("events")}
              icon={<EventsIcon width={24} height={24} />}
              isSelected={selectedItem === i18n.t("events")}
              onPress={() => {
                handleItemPress(i18n.t("events"));
              }}
            />
            <DrawerButton
              routeName={i18n.t("news")}
              icon={<NewsIcon width={24} height={24} />}
              isSelected={selectedItem === i18n.t("news")}
              onPress={() => {
                handleItemPress(i18n.t("news"));
              }}
            />
            <DrawerButton
              routeName={i18n.t("about")}
              icon={<NewsIcon width={24} height={24} />}
              isSelected={selectedItem === i18n.t("about")}
              onPress={() => {
                handleItemPress(i18n.t("about"));
              }}
            />
            <DrawerButton
              routeName={i18n.t("settings")}
              icon={<SettingsIcon width={24} height={24} />}
              isSelected={selectedItem === i18n.t("settings")}
              onPress={() => {
                handleItemPress(i18n.t("settings"));
              }}
            />
          </View>
          {/* <DrawerItemList {...props} />*/}
        </View>
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                Linking.openURL("https://www.facebook.com/").catch((err) =>
                  console.error("An error occurred", err)
                );
              }}
            >
              <Ionicons name="logo-facebook" size={36} color="#352269" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon2}
              onPress={() => {
                Linking.openURL("https://www.instagram.com/").catch((err) =>
                  console.error("An error occurred", err)
                );
              }}
            >
              <Ionicons name="logo-instagram" size={36} color="#352269" />
            </TouchableOpacity>
          </View>
          <View style={styles.privacyPolicyContainer}>
            <Text style={styles.privacyPolicy}>Privacy Policy</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
