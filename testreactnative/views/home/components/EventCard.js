import { Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./EventCardStyle";
import Placeholder from "../../../assets/placeholder.png";
import PlaceholderPic from "../../../assets/homepageicons/placeholderImage.jpg"
const EventCard = ({ item }) => {
  return (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        
      <Image
        style={styles.carouselImage}
        source={item.image ? { uri: item.image } : PlaceholderPic}
        resizeMode="cover"
      />
      </View>
      <View  w style={styles.eventNameView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>
          {item.start_date.originalStartDate} / {item.end_date.originalEndDate}
        </Text>
       
      </View>
    </View>
  );
};

export default EventCard;
