import {  Text, View,ActivityIndicator } from 'react-native'
import React from 'react'
import {styles} from "./LoadingComponentsStyle"

const LoadingComponent = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>Loading...</Text>
      <ActivityIndicator />
    </View>
  )
}

export default LoadingComponent

