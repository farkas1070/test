import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useContext } from "react";
import { styles } from "./ConfirmationModalStyle";
import { I18nContext } from "../../../context/GlobalContext";

const ConfirmationModal = ({
  modalVisible,
  closeModal,
  saveChanges,
  loading,
}) => {
  const [i18n, seti18n] = useContext(I18nContext);

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
          {loading && (
            <View style={styles.loadingcontainer}>
              <ActivityIndicator />
              <Text>Változások Mentése</Text>
            </View>
          )}

          <View style={styles.buttonscontainer}>
            <TouchableOpacity
              style={[styles.confirmationbutton, styles.buttonOpen]}
              onPress={() => {
                saveChanges();
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
