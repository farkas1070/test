import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Carousel from "react-native-snap-carousel-v4";
import { styles } from "./MapCarouselStyle";
import Placeholder from "../../../assets/placeholder.png";
import { useNavigation } from "@react-navigation/core";
import RightArrowIcon from "../../../assets/mapassets/RightArrow.svg";
import CloseIcon from "../../../assets/mapassets/closeCarouselIcon.svg";
import { Ionicons } from "@expo/vector-icons";
import { FontsContext } from "../../../context/GlobalContext";
import LocationIcon from "../../../assets/mapassets/carouselLocationIcon.svg"
const MapCarousel = ({
  data,
  activeMarkerIndex,
  handleMarkerPress,
  carouselRef,
  handleCarouselSnap,
  width,
  onBottomSheetClose,
}) => {
  const navigation = useNavigation();
  const fontsLoaded = useContext(FontsContext);
  if (!fontsLoaded) {
    return null;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.slideContent}>
          <View
            style={{
              width: "40%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Image
              style={styles.image}
              source={item.logo ? { uri: item.logo } : Placeholder}
            />
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                onBottomSheetClose();
              }}
            >
              <Ionicons name="close" size={22} color="#9c97b7" />
            </TouchableOpacity>
            
              <Text style={[styles.text, { fontFamily: "HKGroteskBold" }]}>
                {item.title}
              </Text>
              <View style={{width:'100%',flexDirection:'row'}}>
                <LocationIcon width={20} height={20} ></LocationIcon>
                <Text
                  style={[styles.descriptionText, { fontFamily: "HKGrotesk" }]}
                >
                  {item.connection.adress}
                </Text>
              </View>
            

            <TouchableOpacity
              style={styles.showButton}
              onPress={() => {
                navigation.navigate("Winery", { item: item });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.showButtonText}>Show</Text>
                <RightArrowIcon width={18} height={18} />
              </View>
            </TouchableOpacity>
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
