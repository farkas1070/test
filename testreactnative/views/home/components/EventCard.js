import { Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { styles } from "./EventCardStyle";

import PlaceholderPic from "../../../assets/homepageicons/placeholderImage.jpg";
import { FontsContext } from "../../../context/GlobalContext";

const EventCard = ({ item }) => {
  const fontsLoaded = useContext(FontsContext);
  console.log(item.start_date.originalStartDate);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.carouselImage}
          source={item.image ? { uri: item.image } : PlaceholderPic}
          resizeMode="cover"
        />
      </View>
      <View w style={styles.eventNameView}>
        <Text style={[styles.dateText, { fontFamily: "HKGroteskBold" }]}>
          {item.start_date.day === item.end_date.day
            ? `${item.start_date.day}, ${item.start_date.month}`
            : `${item.start_date.day}, ${item.start_date.month} - ${item.end_date.day}, ${item.end_date.month}`}
        </Text>
        <Text style={[styles.title, { fontFamily: "HKGroteskBold" }]}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default EventCard;
