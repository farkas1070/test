import { Text, View, Modal, TouchableOpacity,ActivityIndicator } from "react-native";
import React, { useState, useContext } from "react";
import { styles } from "./ConfirmationModalStyle";
import { I18nContext } from "../../../context/PointOfInterestContext";

const ConfirmationModal = ({ modalVisible, closeModal, saveChanges }) => {
  const [i18n, seti18n] = useContext(I18nContext);
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{i18n.t("savechangesconfirm")}</Text>
          {loading && <ActivityIndicator/>}
          
          <View style={styles.buttonscontainer}>
            <TouchableOpacity
              style={[styles.confirmationbutton, styles.buttonOpen]}
              onPress={() => {
                saveChanges();
                setLoading(true);
              }}
            >
              <Text style={styles.textStyle}>{i18n.t("yes")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.denybutton, styles.buttonClose]}
              onPress={() => {
                closeModal();
              }}
            >
              <Text style={styles.textStyle}>{i18n.t("no")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
