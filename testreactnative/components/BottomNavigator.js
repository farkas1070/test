import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "../views/events/Events";
import Map from "../views/map/Map";
import Wineries from "../views/wineries/Wineries";
import Home from "../views/home/Home";
import { Ionicons } from "@expo/vector-icons";
import News from "../views/news/News";
import { useNavigation } from "@react-navigation/native";
import InformationModal from "../views/home/components/InformationModal";
import i18n from "../lang/LanguageManager";
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
          name={i18n.t("home")}
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={24} color="black" />
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
          name="Események"
          component={Events}
          options={{
            tabBarIcon: () => (
              <Ionicons name="calendar-outline" size={24} color="black" />
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
          name="Térkép"
          component={Map}
          options={{
            tabBarIcon: () => (
              <Ionicons name="map-outline" size={24} color="black" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Borászatok"
          component={Wineries}
          options={{
            tabBarIcon: () => (
              <Ionicons name="wine-outline" size={24} color="black" />
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
          name="Hírek"
          component={News}
          options={{
            tabBarIcon: () => (
              <Ionicons name="newspaper-outline" size={24} color="black" />
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

const styles = StyleSheet.create({});
