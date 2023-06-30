import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Winery from "../views/winery/Winery";
import Event from "../views/event/Event";
import New from "../views/new/New";
import TourInfo from "../views/tourinfo/TourInfo"

import { PointOfInterestProvider } from "../context/PointOfInterestContext";
import DrawerNavigator from "./DrawerNavigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  

  const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{ headerShown: false }}
    >
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
        name="TourInfo"
        component={TourInfo}

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
        name="New"
        component={New}
        
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
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
