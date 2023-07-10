import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect,useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Winery from "../views/winery/Winery";
import Event from "../views/event/Event";
import New from "../views/new/New";
import OnBoarding from "../views/home/components/OnBoarding";
import TourInfo from "../views/tourinfo/TourInfo";
import DrawerNavigator from "./DrawerNavigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "../views/home/components/SplashScreen";
import NoDataView from "../views/NoDataView/NoDataView";
import { WineriesContext,EventsContext,NewsContext } from "../context/PointOfInterestContext";
const Stack = createNativeStackNavigator();
 
const StackNavigator = () => {
  const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  };
  const [firstTimeOpen, setFirstTimeOpen] = useState(true);
  const [isEffectDone, setIsEffectDone] = useState(false);
  const [wineries, setWineries] = useContext(WineriesContext);
  const [events, setEvents] = useContext(EventsContext);
  const [news, setNews] = useContext(NewsContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("FirstTimeOpen");
        
        if (value === null ) {0
          setFirstTimeOpen(true);
          setIsEffectDone(true);
        } else {
          setFirstTimeOpen(false);
          setIsEffectDone(true);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return isEffectDone ? (
    
    <Stack.Navigator>
      {firstTimeOpen === true ? (
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
      ) : null}
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Event"
        component={Event}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            textAlign: "center",
          },

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
      <Stack.Screen
        name="Winery"
        component={Winery}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            textAlign: "center",
          },

          
        }}
      />

      <Stack.Screen
        name="New"
        component={New}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            textAlign: "center",
          },

          
        }}
      />
      <Stack.Screen
        name="TourInfo"
        component={TourInfo}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            textAlign: "center",
          },

          
        }}
      />
    </Stack.Navigator>
  ) : (
    <SplashScreen />
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
