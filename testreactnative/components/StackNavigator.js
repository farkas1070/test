import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Winery from "../views/winery/Winery";
import Event from "../views/event/Event";
import New from "../views/new/New";
import DrawerNavigator from "./DrawerNavigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });
    // Handle notification opening event
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(remoteMessage);
      const topic = {
        events: "Események",
        news: "Hírek",
      };
      // Navigate to the desired screen
      navigation.navigate(topic[remoteMessage.data.dl]);
    });
  }, []);
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{ headerShown: true }}
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
              <Ionicons name="menu" size={24} color="black" />
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
              <Ionicons name="menu" size={24} color="black" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
