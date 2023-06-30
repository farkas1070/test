import { View, TouchableOpacity, Text, Image, Modal } from "react-native";
import React from "react";
import { styles } from "./ToursModalStyle";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const ToursModal = ({ modalVisible, closeModal, tours, handleshowTour }) => {
  const navigation = useNavigation();
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
              <TouchableOpacity key={index} style={styles.modalbutton}  onPress={() => { closeModal(); navigation.navigate("TourInfo", { item: tour });}}>
                <View style={styles.tourcard}>
                  <View style={styles.tourContent}>
                    <Image
                      style={styles.tourimage}
                      source={{ uri: tour.logo }}
                    />
                    <Text style={styles.tourtext}>{tour.name}</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        closeModal();
                        navigation.navigate("TourInfo", { item: tour });
                      }}
                    >
                      <MaterialIcons name="info" size={32} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {handleshowTour(tour);}}>
                      <MaterialIcons name="map" size={32} color="blue" />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default ToursModal;
