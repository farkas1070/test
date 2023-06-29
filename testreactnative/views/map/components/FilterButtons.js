import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { styles } from "./FilterButtonsStyle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import QRScanner from "./QRScanner";

const FilterButtons = ({
  filter,
  setFilter,
  openModal,
  handleQRCodeScanned,
}) => {
  return (
    <View style={styles.filterButtonContainer}>
      <TouchableOpacity
        style={
          filter === "vineyard"
            ? styles.filterButtonActive
            : styles.filterButton
        }
        onPress={() => {
          filter !== "vineyard" ? setFilter("vineyard") : setFilter("all");
        }}
      >
        <Text style={styles.buttonText}>
          <MaterialIcons name="wine-bar" size={28} color="#FFF" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          filter === "sight" ? styles.filterButtonActive : styles.filterButton
        }
        onPress={() => {
          filter !== "sight" ? setFilter("sight") : setFilter("all");
        }}
      >
        <Text style={styles.buttonText}>
          <MaterialIcons name="wb-shade" size={28} color="#FFF" />
        </Text>
      </TouchableOpacity>
      <QRScanner onQRCodeScanned={handleQRCodeScanned} />
      <TouchableOpacity style={styles.filterButton} onPress={openModal}>
        <Text style={styles.buttonText}>
          <MaterialIcons name="tour" size={28} color="#FFF" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButtons;
