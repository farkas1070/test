import { StyleSheet, Text, View, Alert,Switch ,PermissionsAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";

const Valami2 = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  

  const requestUserPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Notification Permission",
          message: "This app requires notification permission.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Notification permission granted.");
        return true;
      } else {
        console.log("Notification permission denied.");
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const registerForRemoteMessages = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log("FCM token:", token);
    } catch (error) {
      console.log("Failed to register for remote messages:", error);
    }
  };


  useEffect(() => {
    
    if (notificationEnabled) {
      if (requestUserPermission()) {
        //return fcm token for the device
        registerForRemoteMessages();
        messaging().subscribeToTopic("all").then(()=>console.log("subscribed to topic"))
      } else {
        console.log("failed token status", authStatus);
      }
    }

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
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

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, [notificationEnabled]);

  return (
    <View>
      <Text>FCM tutorial</Text>
      <Switch
        value={notificationEnabled}
        onValueChange={()=>{setNotificationEnabled(!notificationEnabled)}}
      />
    </View>
  );
};

export default Valami2;

const styles = StyleSheet.create({});
