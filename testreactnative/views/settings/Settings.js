import {  Text, View } from 'react-native'
import React,{useState} from 'react'
import {styles} from "./SettingsStyle"

const Settings = () => {
    const [language, setLanguage] = useState('magyar')

    
  return (
    <View style={styles.maincontainer}>
      <Text>Set</Text>
      <View style={styles.bodycontainer}>

      </View>
    </View>
  )
}

export default Settings

