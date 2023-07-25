
import { View, TouchableOpacity,Image,Text } from "react-native";

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
import {styles} from "./BottomNavigatorStyle"
import { SvgCssUri } from "react-native-svg";
import { SimpleLineIcons } from '@expo/vector-icons'; 

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
            headerTitle: () => <SvgCssUri uri={'https://soproniborvidek.hu/wp-content/uploads/2020/11/soproniborvidek_logo_color_fekvo.svg'} width={140} height={100} />,
            headerStyle: {
              height:100,
              backgroundColor: '#F5F5F5',
            },
            headerTitleAlign: "center",
            
            
            headerRight: () => (
              <TouchableOpacity
                style={styles.searchbutton}
                onPress={() => {
                  openModal();
                }}
              >
                <Ionicons
                  name="search"
                  size={24}
                  color="#A8A8A8"
                />
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <View style={styles.menubutton}>
                <SimpleLineIcons name="menu" size={24} color="#A8A8A8" onPress={() => {
                    openMenu();
                  }} />
                
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
            headerShown: false,
            headerTitleStyle: {
              textAlign: "center",
            },
            
      
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
