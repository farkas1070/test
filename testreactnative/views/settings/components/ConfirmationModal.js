import { Text, View, Modal, TouchableOpacity ,ActivityIndicator} from "react-native";
import React from "react";
import { styles } from "./ConfirmationModalStyle";

const ConfirmationModal = ({ modalVisible, closeModal, saveChanges }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Biztos el akarod menteni a változtatásokat?
          </Text>
          <View style={styles.buttonscontainer}>
            <TouchableOpacity
              style={[styles.denybutton, styles.buttonClose]}
              onPress={() => {
                closeModal()
              }}
            >
              <Text style={styles.textStyle}>mégse</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.confirmationbutton, styles.buttonOpen]}
              onPress={() => {
                saveChanges();
              }}
            >
              <Text style={styles.textStyle}>Változások mentése</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
