import React from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { styles } from "./TourInfoModalStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TourInfo = ({ TourInfoModalVisible, closeTourInfoModal, tour }) => {
  return (
    <Modal
      statusBarTranslucent={true}
      visible={TourInfoModalVisible}
      animationType="fade"
    >
      <View>
        <View style={styles.imagecontainer}>
          <Image style={styles.tourimage} source={{ uri: tour.logo }} />
          <View style={styles.upperbuttonscontainer}>
            <TouchableOpacity
              style={styles.backbutton}
              onPress={() => {
                closeTourInfoModal();
              }}
            >
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.maininfocontainer}>
            <Text style={styles.nametext}>{tour.name}</Text>
            <View style={styles.infocontainer}>
              <View>
                <MaterialCommunityIcons name="walk" size={24} color="black" />
              </View>
              <View style={styles.smallinfocontainer}>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={24}
                  color="black"
                />
                <Text style={styles.infotext}>{tour.duration}</Text>
              </View>
              <View style={styles.smallinfocontainer}>
                <MaterialCommunityIcons
                  name="map-marker-path"
                  size={24}
                  color="black"
                />
                <Text style={styles.infotext}>{tour.length}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bodycontainer}>
          <View style={styles.descripioncontainer}>
            <Text style={styles.descriptiontext}>{tour.description}</Text>
          </View>
        </View>
        <View style={styles.tourinfocontainer}>
          <Text>Mi Van A Túrában?</Text>
        </View>
        <View style={styles.startbuttoncontainer}>
          <TouchableOpacity
            style={styles.startbutton}
            onPress={() => {
              closeTourInfoModal()
            }}
          >
            <MaterialCommunityIcons
              name="map-marker-right"
              size={24}
              color="white"
            />
            <Text style={styles.starttext}>Indítás</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TourInfo;
