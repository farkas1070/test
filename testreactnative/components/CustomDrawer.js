import React, { useContext } from "react";
import { View, TouchableOpacity, Linking, Image, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./CustomDrawerStyle";
import { useNavigation } from "@react-navigation/native";
import { I18nContext } from "../context/GlobalContext";
const CustomDrawer = (props) => {
  const navigation = useNavigation();
  const [i18n, setI18n] = useContext(I18nContext);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <Image
          style={styles.image}
          source={{
            uri: "https://fw.photos/cZnDGqeic7KbE8INYuFcfCGQa3o=/665x0/filters:watermark(https://admin.sopronmedia.hu/images/watermark.png,10,-30,10,13,13)/https%3A%2F%2Fadmin.sopronmedia.hu%2Fuploads%2Fimport%2F0b%2Fcd%2Fsoproni-borvidek-social-fb-post-2000p2_hjgm.jpg",
          }}
        />
        <View
          style={{
            textAlign: "center",
          }}
        >
          <View style={{ textAlign: "center", padding: 10 }}>
            
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                navigation.navigate(i18n.t("home")[0]);
              }}
            >
              <Ionicons
                name="home"
                size={24}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.drawerItemText}>{i18n.t("home")[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                navigation.navigate(i18n.t("settings"));
              }}
            >
              <Ionicons
                name="settings"
                size={24}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.drawerItemText}>{i18n.t("settings")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                navigation.navigate(i18n.t("wineries"));
              }}
            >
              <Ionicons
                name="wine"
                size={24}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.drawerItemText}>{i18n.t("wineries")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                navigation.navigate(i18n.t("events"));
              }}
            >
              <Ionicons
                name="calendar"
                size={24}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.drawerItemText}>{i18n.t("events")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem}
              onPress={() => {
                navigation.navigate(i18n.t("news"));
              }}
            >
              <Ionicons
                name="ios-newspaper"
                size={24}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.drawerItemText}>{i18n.t("news")}</Text>
            </TouchableOpacity>
          </View>
          {/* <DrawerItemList {...props} />*/}
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.facebook.com/").catch((err) =>
              console.error("An error occurred", err)
            );
          }}
        >
          <Ionicons name="logo-facebook" size={36} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://www.instagram.com/").catch((err) =>
              console.error("An error occurred", err)
            );
          }}
        >
          <Ionicons name="logo-instagram" size={36} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
