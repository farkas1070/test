import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigator from "./BottomNavigator";
import Settings from "../views/settings/Settings";
import Valami2 from "./Valami2";
import Valami from "./Valami";
import { TouchableOpacity, Text, View, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { I18nContext } from "../context/GlobalContext";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const [i18n, setI18n] = useContext(I18nContext);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName={i18n.t("home")}
      screenOptions={{
        drawerPosition: "left",
        drawerStyle: {
          backgroundColor: "#fff",
          width: "75%",
        },
        drawerContentContainerStyle: {
          flex: 1,
          justifyContent: "center",
        },
        drawerItemStyle: {
          borderRadius: 25,
          marginVertical: 10,
        },
        drawerLabelStyle: {
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    >
      <Drawer.Screen
        name={i18n.t("home")[1]}
        component={BottomNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Valami2"
        component={Valami2}
        options={{
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
