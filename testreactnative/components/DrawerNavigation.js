import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigator from "./BottomNavigator";
import Settings from "../views/settings/Settings";
import Valami2 from "./Valami2";
import Valami from "./Valami";
import i18n from "../lang/LanguageManager";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LanguageContext } from "../context/PointOfInterestContext";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <Drawer.Navigator
      initialRouteName={i18n.t("home")[0]}
      screenOptions={{ drawerPosition: "right" }}
    >
      <Drawer.Screen
        name={i18n.t("home")[1]}
        component={BottomNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "apps" : "apps-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Valami2"
        component={Valami2}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "apps" : "apps-outline"}
              size={size}
              color={color}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="ios-arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name="Valami"
        component={Valami}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "apps" : "apps-outline"}
              size={size}
              color={color}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="ios-arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name={i18n.t("settings")}
        component={Settings}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "apps" : "apps-outline"}
              size={size}
              color={color}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="ios-arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
