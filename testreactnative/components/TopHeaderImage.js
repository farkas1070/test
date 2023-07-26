import { Image } from 'react-native'
import React from 'react'
import {styles} from "./TopHeaderImageStyle"
import { SafeAreaView } from 'react-native-safe-area-context'

const TopHeaderImage = ({item}) => {
  return (
    <SafeAreaView>
      <Image style={styles.image} source={{ uri: item }} />
    </SafeAreaView>
  )
}

export default TopHeaderImage

