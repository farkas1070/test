import { View, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "../views/events/Events";
import Map from "../views/map/Map";
import Wineries from "../views/wineries/Wineries";
import Home from "../views/home/Home";
import { Ionicons } from "@expo/vector-icons";
import News from "../views/news/News";
import { useNavigation } from "@react-navigation/native";
import InformationModal from "../views/home/components/InformationModal";
import { I18nContext } from "../context/GlobalContext";
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [i18n] = useContext(I18nContext);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const navigation = useNavigation();
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <React.Fragment>
      <InformationModal modalVisible={modalVisible} closeModal={closeModal} />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name={i18n.t("home")[0]}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color="black"
              />
            ),

            headerTintColor: "black",
            headerTitleAlign: "center",
            headerTitleStyle: {
              textAlign: "center",
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 10 }}
                onPress={() => {
                  openModal();
                }}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 10 }}>
                <Ionicons
                  name="menu"
                  size={24}
                  color="black"
                  onPress={() => {
                    openMenu();
                  }}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name={i18n.t("events")}
          component={Events}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={24}
                color="black"
              />
            ),

            headerTintColor: "black",
            headerTitleAlign: "center",
            headerTitleStyle: {
              textAlign: "center",
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 10 }}
                onPress={() => {
                  openModal();
                }}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 10 }}>
                <Ionicons
                  name="menu"
                  size={24}
                  color="black"
                  onPress={() => {
                    openMenu();
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={i18n.t("map")}
          component={Map}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "map" : "map-outline"}
                size={24}
                color="black"
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={i18n.t("wineries")}
          component={Wineries}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "wine" : "wine-outline"}
                size={24}
                color="black"
              />
            ),
            headerTintColor: "black",
            headerTitleAlign: "center",
            headerTitleStyle: {
              textAlign: "center",
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 10 }}
                onPress={() => {
                  openModal();
                }}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 10 }}>
                <Ionicons
                  name="menu"
                  size={24}
                  color="black"
                  onPress={() => {
                    openMenu();
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={i18n.t("news")}
          component={News}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "newspaper" : "newspaper-outline"}
                size={24}
                color="black"
              />
            ),
            headerTintColor: "black",
            headerTitleAlign: "center",
            headerTitleStyle: {
              textAlign: "center",
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 10 }}
                onPress={() => {
                  openModal();
                }}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 10 }}>
                <Ionicons
                  name="menu"
                  size={24}
                  color="black"
                  onPress={() => {
                    openMenu();
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default BottomNavigator;
