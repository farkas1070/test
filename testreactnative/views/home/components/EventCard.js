import { Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./EventCardStyle";
import Placeholder from "../../../assets/placeholder.png";

const EventCard = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image
        style={styles.carouselImage}
        source={item.image ? { uri: item.image } : Placeholder}
      />
      <View style={styles.eventNameView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>
          {item.start_date} / {item.end_date}
        </Text>
        <View style={styles.datebox}></View>
      </View>
    </View>
  );
};

export default EventCard;
