import {  Text, View,Image } from 'react-native'
import React from 'react'
import {styles} from "./WineryCardStyle"
import Placeholder from "../../../assets/placeholder.png"
const WineryCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
        <Image
        style={styles.carouselImage}
        source={item.logo ? { uri: item.logo } : Placeholder}
      />
        <Text>{item.title}</Text>
    </View>
  )
}

export default WineryCard

