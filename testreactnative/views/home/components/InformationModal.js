import {  Text, View,Modal,TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "./InformationModalStyle"

const InformationModal = ({modalVisible,closeModal}) => {
  return (
    <Modal
      statusBarTranslucent={true}
      visible={modalVisible}
      animationType="fade"
    >
    <View>
        <Text>modal</Text>
        <TouchableOpacity onPress={closeModal}><Text>csukd be</Text></TouchableOpacity>
    </View>
    </Modal>
  )
}

export default InformationModal

