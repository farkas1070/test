import { Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./InformationModalStyle";

const InformationModal = ({ modalVisible, closeModal }) => {
  return (
    <Modal
      statusBarTranslucent={true}
      visible={modalVisible}
      transparent
      animationType="fade"
    >
      <View style={styles.mainconatiner}>
        <View style={styles.modalcontainer}>
        <Text style={styles.text}>Készítette: Effix Marketing Kft.</Text>
        <TouchableOpacity onPress={closeModal} style={styles.closebutton}>
          <Text>csukd be</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </Modal>
  );
};

export default InformationModal;
