import { View, TouchableOpacity, Image, Text } from "react-native";

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
import { styles } from "./BottomNavigatorStyle";
import { SvgCssUri } from "react-native-svg";
import { SimpleLineIcons } from "@expo/vector-icons";
import HomeIcon from "../assets/navigatorassets/Home";
import WineriesIcon from "../assets/navigatorassets/Wineries";
import EventsIcon from "../assets/navigatorassets/Events";
import NewsIcon from "../assets/navigatorassets/News";
import HomeFilledIcon from "../assets/navigatorassets/HomeFilled";
import WineriesFilledIcon from "../assets/navigatorassets/WineriesFilled";
import EventsFilledIcon from "../assets/navigatorassets/EventsFilled";
import NewsFilledIcon from "../assets/navigatorassets/NewsFilled";
import MenuIcon from "../assets/menuassets/Menu";
import { useFonts } from "expo-font";
import HKGrotesk from "../fonts/HankenGrotesk-Regular.ttf";
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
  const [loaded] = useFonts({
    HKGrotesk: HKGrotesk,
  });

  if (!loaded) {
    return null;
  }
  return (
    <React.Fragment>
      <InformationModal modalVisible={modalVisible} closeModal={closeModal} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
            paddingTop: 10,
            marginBottom: 20,
            
            backgroundColor: "#F5F5F5",
          },
          tabBarActiveTintColor: "#FF8882",
          tabBarInactiveTintColor: "#9E9E9E",
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
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HomeFilledIcon width={24} height={24} />
              ) : (
                <HomeIcon width={24} height={24} />
              ),

            headerTitle: () => (
              <SvgCssUri
                uri={
                  "https://soproniborvidek.hu/wp-content/uploads/2020/11/soproniborvidek_logo_color_fekvo.svg"
                }
                width={140}
                height={100}
              />
            ),
            headerStyle: {
              height: 100,
              backgroundColor: "#F5F5F5",
            },
            headerTitleAlign: "center",

            headerRight: () => (
              <TouchableOpacity
                style={styles.searchbutton}
                onPress={() => {
                  openModal();
                }}
              >
                <Ionicons name="search" size={24} color="#A8A8A8" />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 10 }}
                onPress={() => {
                  openMenu();
                }}
              >
                <MenuIcon width={24} height={24} />
              </TouchableOpacity>
            ),
          }}
        />

        <Tab.Screen
          name={i18n.t("wineries")}
          component={Wineries}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <WineriesFilledIcon width={24} height={24} />
              ) : (
                <WineriesIcon width={24} height={24} />
              ),
            headerTintColor: "black",
            headerTitleAlign: "center",
            headerShown: false,
            headerTitleStyle: {
              textAlign: "center",
            },
          }}
        />
        <Tab.Screen
          name={i18n.t("events")}
          component={Events}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <EventsFilledIcon width={24} height={24} />
              ) : (
                <EventsIcon width={24} height={24} />
              ),

            headerTintColor: "black",
            headerTitleAlign: "center",
            headerShown: false,
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
            tabBarIcon: ({ focused }) =>
              focused ? (
                <NewsFilledIcon width={24} height={24} />
              ) : (
                <NewsIcon width={24} height={24} />
              ),
            headerTintColor: "black",
            headerTitleAlign: "center",
            headerShown: false,
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
