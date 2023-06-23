import { StyleSheet, Text, View,Alert } from "react-native";
import React, { useEffect,useState } from "react";
import messaging from '@react-native-firebase/messaging';

const Valami2 = () => {
  
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  const registerForRemoteMessages = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('FCM token:', token);
    } catch (error) {
      console.log('Failed to register for remote messages:', error);
    }
  };

  useEffect(() => {
    if (requestUserPermission()) {
      //return fcm token for the device
      registerForRemoteMessages()
    } else {
      console.log("failed token status", authStatus);
    }

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then( async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;


  }, []);

  return (
    <View>
      <Text>FCM tutorial</Text>
    </View>
  );
};

export default Valami2;

const styles = StyleSheet.create({});
