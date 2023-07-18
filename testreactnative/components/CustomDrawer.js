import React from "react";
import { View, TouchableOpacity, Linking, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 200,
            textAlign: "center",
          }}
        >
          <DrawerItemList {...props} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 200,
    width: "90%",
  },
});

export default CustomDrawer;
