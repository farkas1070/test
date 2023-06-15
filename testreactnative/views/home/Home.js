import {  SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { styles } from "./HomeStyle";
import Header from "./components/Header"
const Home = () => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View>
        <Text>Üdvözlünk a Soproni Borvidékek appban!</Text>
        <Text>Mit szeretnél csinálni?</Text>
      </View>
      
      
    </SafeAreaView>
  )
}

export default Home

