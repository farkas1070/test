import {  Text, View } from 'react-native'
import React,{useState} from 'react'
import {styles} from "./SettingsStyle"

const Settings = () => {
    const [language, setLanguage] = useState('magyar')

    
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

