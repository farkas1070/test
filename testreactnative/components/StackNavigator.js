import { StyleSheet, View,Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Winery from "../views/winery/Winery";
import Event from "../views/event/Event";
import New from "../views/new/New";
import React,{useEffect} from "react";

import DrawerNavigator from "./DrawerNavigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import messaging from "@react-native-firebase/messaging";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const navigation = useNavigation();
  useEffect(() => {


    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    
    // Handle notification opening event
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(remoteMessage.data.dl)

      const topic = {
        'events' : 'Események',
        'news' : 'Hírek'
      }
        // Navigate to the desired screen
        navigation.navigate(topic[remoteMessage.data.dl]);
      
    });
    return unsubscribe;
  }, []);

  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
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
