import {  Text, View,Image } from 'react-native'
import React from 'react'
import {styles} from "./NoDataViewStyle"

const NoDataView = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>Hiba Történt az Adat beolvasása során, próbáld késöbb</Text>
      <Image
          style={styles.image}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1747/1747789.png' }}
        />
    </View>
  )
}

export default NoDataView

