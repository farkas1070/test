import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigator from "./BottomNavigator";
import Settings from "../views/settings/Settings";
import i18n from "../lang/LanguageManager";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();
  
  return(
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
              navigation.goBack()
            }}
          >
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        ),
        headerTitleAlign: "center"
      }}
    />
  </Drawer.Navigator>
  )
  
};

export default DrawerNavigator;
