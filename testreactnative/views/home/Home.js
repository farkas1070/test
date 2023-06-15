import {  SafeAreaView, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { styles } from "./HomeStyle";
import Header from "./components/Header"
import messaging from '@react-native-firebase/messaging';
const Home = () => {
  const requestUserPermission = async ()=>{
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    } else {
      console.log('failed to get token',authStatus)
    }
  }
  useEffect(()=>{

    if (requestUserPermission()) {
      //return token from device
      messaging().getToken().then(token =>{
        console.log(token)
      })
    }
  }, [])
 
  
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

