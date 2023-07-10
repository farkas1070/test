import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./ConfirmationModalStyle";
import I18nProvider from "../../../lang/LanguageManager";

const ConfirmationModal = ({ modalVisible, closeModal, saveChanges }) => {
  const i18n = I18nProvider();
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
          <Text style={styles.modalText}>
            {i18n.t("savechangesconfirmation")}
          </Text>
          <View>{loading && <ActivityIndicator />}</View>

          <View style={styles.buttonscontainer}>
            <TouchableOpacity
              style={[styles.confirmationbutton, styles.buttonOpen]}
              onPress={() => {
                saveChanges();
                setLoading(true);
              }}
            >
              <Text style={styles.textStyle}>Igen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.denybutton, styles.buttonClose]}
              onPress={() => {
                closeModal();
              }}
            >
              <Text style={styles.textStyle}>Nem</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
