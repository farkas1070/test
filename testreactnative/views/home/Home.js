import {  Text, View,useEffect } from 'react-native'
import React from 'react'
import { styles } from "./HomeStyle";
import BackgroundFetch from 'react-native-background-fetch';
import PushNotification from 'react-native-push-notification';

const Home = () => {
  useEffect(() => {
    // Push notifications setup (recommend extracting into separate file)
    PushNotification.configure({
      // onNotification is called when a notification is to be emitted
      onNotification: notification => console.log(notification),

      // Permissions to register for iOS
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
    });

    // Background fetch setup (recommend extracting into separate file)
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // fetch interval in minutes
      },
      async taskId => {
        console.log('Received background-fetch event: ', taskId);

        // 3. Insert code you want to run in the background, for example:
        const outsideTemperature = await getTemperatureInCelsius();

        if (outsideTemperature <= 0) {
          // 4. Send a push notification
          PushNotification.localNotification({
            title: 'Cold Weather Alert',
            message: `It's ${outsideTemperature} degrees outside.`,
            playSound: true,
            soundName: 'default',
          });
        }
        
        // Call finish upon completion of the background task
        BackgroundFetch.finish(taskId);
      },
      error => {
        console.error('RNBackgroundFetch failed to start.');
      },
    );
  }, []);

  
  return (
    <View style={styles.maincontainer}>
      <View>
        <Text>Üdvözlünk a Soproni Borvidékek appban!</Text>
        <Text>kopasz olivér</Text>
      </View>
      
      
    </View>
  )
}

export default Home

