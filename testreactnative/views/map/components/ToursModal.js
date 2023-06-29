import {
    View,
    TouchableOpacity,
    Text,
    Image,
    Modal,
  } from "react-native";
import React from 'react'
import {styles} from "./ToursModalStyle"
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const ToursModal = ({modalVisible,closeModal,tours,setTourFilter,showtours,setShowTours}) => {
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
                        setTourFilter(tour.name);
                        closeModal();
                        if (!showtours) {
                          setShowTours(true);
                        }
                      }}
                    >
                      <View style={styles.tourcard}>
                        <Image
                          style={styles.tourimage}
                          source={{ uri: tour.logo }}
                        />
                        <Text style={styles.tourtext}>{tour.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </Modal>
  )
}

export default ToursModal

