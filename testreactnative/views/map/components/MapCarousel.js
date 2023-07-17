import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Carousel from "react-native-snap-carousel-v4";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./MapCarouselStyle";
import Placeholder from "../../../assets/placeholder.png";
import { useNavigation } from "@react-navigation/core";
import { FontAwesome5 } from "@expo/vector-icons";

const MapCarousel = ({
  data,
  activeMarkerIndex,
  handleMarkerPress,
  carouselRef,
  handleCarouselSnap,
  handleResetLocation,
  width,
}) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.slideContent}>
          <Image
            style={styles.image}
            source={item.logo ? { uri: item.logo } : Placeholder}
          />
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>{"description"}</Text>
            </View>
            <TouchableOpacity
              style={styles.jumptobutton}
              onPress={() => navigation.navigate("Winery", { item: item })}
            >
              <FontAwesome5 name="location-arrow" size={24} color="white" />
              <Text style={styles.winerytext}>Borászathoz</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.carousel}>
      <TouchableOpacity style={styles.button} onPress={handleResetLocation}>
        <Text style={styles.buttonText}>
          <MaterialIcons name="my-location" size={28} color="#FFF" />
        </Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideOpacity={1}
        useScrollView={true}
        onSnapToItem={handleCarouselSnap}
      />
    </View>
  );
};

export default MapCarousel;
