import {  SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { styles } from "./HomeStyle";
import Header from "./components/Header"

const Home = () => {
  

  
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

