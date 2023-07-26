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
  width,
}) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.slideContent}>
          <View style={{width:'45%',height:'100%',justifyContent:'center',alignItems:'flex-end'}}>
          <Image
            style={styles.image}
            source={item.logo ? { uri: item.logo } : Placeholder}
          />
          </View>
          <View style={styles.textContainer}>
            <View>
            <Text style={styles.text}>
              {item.title}
            </Text>
            <Text style={styles.descriptionText}>
              {item.connection.adress}
            </Text>
            </View>
            <View>
              <Text>Open Hours</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.carousel}>
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
