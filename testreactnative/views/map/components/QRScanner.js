import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function QRScanner({ onQRCodeScanned }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanning) return; // Ne fusson le, ha már leállítottuk a szkennelést
    setScanning(false);
    onQRCodeScanned(data);
    closeModal(); // Zárja be a modális ablakot
  };

  const startScanning = () => {
    openModal();
    setScanning(true);
  };

  const closeModal = () => {
    setScanning(false);
    setModalVisible(false);
  };

  if (hasPermission === null) {
    return (
      <TouchableOpacity style={styles.button} onPress={startScanning}>
        <MaterialIcons name="qr-code-scanner" size={28} color="#FFF" />
      </TouchableOpacity>
    );
  }
  if (hasPermission === false) {
    return (
      <TouchableOpacity style={styles.button} onPress={startScanning}>
        <MaterialIcons name="qr-code-scanner" size={28} color="#FFF" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <BarCodeScanner
              ref={scannerRef}
              onBarCodeScanned={handleBarCodeScanned}
              style={styles.scanner}
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Bezárás</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {!scanning && (
        <TouchableOpacity style={styles.button} onPress={startScanning}>
          <MaterialIcons name="qr-code-scanner" size={28} color="#FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
  },
  modalContent: {
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 16,
    marginTop: 16,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
