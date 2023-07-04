import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import BottomNavigator from "./BottomNavigator";
import Valami from "./Valami";
import Valami2 from "./Valami2";
import Settings from "../views/settings/Settings";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, drawerPosition: "right" }}
  >
    <Drawer.Screen
      name="Home"
      component={BottomNavigator}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? "apps" : "apps-outline"}
            size={size}
            color={color}
          />
        ),
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
      }}
    />
    <Drawer.Screen
      name="Beállítások"
      component={Settings}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? "apps" : "apps-outline"}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
