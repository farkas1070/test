import { View, TouchableOpacity, Text, Image, Modal } from "react-native";
import React, { useState } from "react";
import { styles } from "./ToursModalStyle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TourInfoModal from "./TourInfoModal";

const ToursModal = ({ modalVisible, closeModal, tours, handleshowTour }) => {
  const [TourInfoModalVisible, setTourInfoModalVisible] = useState(false);
  const [currentTour, setCurrentTour] = useState(tours);
  const openTourInfoModal = () => {
    setTourInfoModalVisible(true);
  };
  const closeTourInfoModal = () => {
    setTourInfoModalVisible(false);
  };

  return (
    <Modal
      statusBarTranslucent={true}
      visible={modalVisible}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
          <MaterialIcons name="close" size={28} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.modalContent}>
          <Text style={styles.borturatext}>Bortúrák</Text>
          {tours.map((tour, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.modalbutton}
                onPress={() => {
                  setCurrentTour(tour);
                  handleshowTour(tour)
                  openTourInfoModal();
                }}
              >
                <View style={styles.tourcard}>
                  <View style={styles.tourContent}>
                    <Image
                      style={styles.tourimage}
                      source={{ uri: tour.logo }}
                    />
                    <Text style={styles.tourtext}>{tour.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TourInfoModal
        TourInfoModalVisible={TourInfoModalVisible}
        closeTourInfoModal={closeTourInfoModal}
        tour={currentTour}
      />
    </Modal>
  );
};

export default ToursModal;
