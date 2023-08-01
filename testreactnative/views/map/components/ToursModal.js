import { View, TouchableOpacity, Text, Image, Modal } from "react-native";
import React from "react";
import { styles } from "./ToursModalStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const ToursModal = ({ modalVisible, closeModal, tours, handleshowTour }) => {
  const navigation = useNavigation();
  return (
    <Modal
      statusBarTranslucent={true}
      visible={modalVisible}
      transparent
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
          <MaterialIcons name="close" size={28} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.modalContent}>
          {tours.map((tour, index) => {
            return (
              <>
                <View style={styles.imagecontainer}>
                  <Image style={styles.tourimage} source={{ uri: tour.logo }} />
                  <View style={styles.upperbuttonscontainer}></View>
                  <View style={styles.maininfocontainer}>
                    <Text style={styles.nametext}>{tour.name}</Text>
                    <View style={styles.infocontainer}>
                      <View>
                        <MaterialCommunityIcons
                          name="walk"
                          size={24}
                          color="black"
                        />
                      </View>
                      <View style={styles.smallinfocontainer}>
                        <MaterialCommunityIcons
                          name="alarm"
                          size={24}
                          color="black"
                        />
                        <Text style={styles.infotext}>{tour.duration}</Text>
                      </View>
                      <View style={styles.smallinfocontainer}>
                        <MaterialCommunityIcons
                          name="map"
                          size={24}
                          color="black"
                        />
                        <Text style={styles.infotext}>{tour.length}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.bodycontainer}>
                  <View style={styles.dscriptioncontainer}>
                    <Text style={styles.descriptiontext}>
                      {tour.description}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      handleshowTour(tour);
                      closeModal();
                    }}
                    style={styles.starttourbutton}
                  >
                    <Text style={styles.content}>Start Tour</Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default ToursModal;
