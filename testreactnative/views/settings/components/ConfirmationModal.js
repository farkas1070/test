import {  Text, View,Modal,TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from "./ConfirmationModalStyle"


const ConfirmationModal = ({modalVisible,closeModal,saveChanges}) => {
  return (
    
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {saveChanges()}}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    
  )
}

export default ConfirmationModal

