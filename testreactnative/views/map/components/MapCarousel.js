import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Carousel from "react-native-snap-carousel-v4";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./MapCarouselStyle";

const MapCarousel = ({
  data,
  activeMarkerIndex,
  handleMarkerPress,
  carouselRef,
  handleCarouselSnap,
  handleResetLocation,
  width,
}) => {
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.slide}
        onPress={() => handleMarkerPress(index)}
      >
        <View style={styles.slideContent}>
          <Image style={styles.image} source={{ uri: item.logo }} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{"description"}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
        onSnapToItem={(index) => {
          handleCarouselSnap(index);
        }}
      />
    </View>
  );
};

export default MapCarousel;
