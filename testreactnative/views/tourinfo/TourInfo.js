import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./TourInfoStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const TourInfo = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.tourimage}
          source={{ uri: route.params.item.logo }}
        />
        <View style={styles.upperbuttonscontainer}>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => {
              navigation.goBack();
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
          <Text style={styles.nametext}>{route.params.item.name}</Text>
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
              <Text style={styles.infotext}>{route.params.item.duration}</Text>
            </View>
            <View style={styles.smallinfocontainer}>
              <MaterialCommunityIcons
                name="map-marker-path"
                size={24}
                color="black"
              />
              <Text style={styles.infotext}>{route.params.item.length}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bodycontainer}>
        <View style={styles.dscriptioncontainer}>
          <Text style={styles.descriptiontext}>
            {route.params.item.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TourInfo;
