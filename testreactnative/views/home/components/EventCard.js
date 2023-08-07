import { Text, View, Image } from "react-native";
import React,{useContext} from "react";
import { styles } from "./EventCardStyle";

import PlaceholderPic from "../../../assets/homepageicons/placeholderImage.jpg"
import { FontsContext } from "../../../context/GlobalContext";


const EventCard = ({ item }) => {
  const fontsLoaded = useContext(FontsContext);
  console.log(item.start_date.originalStartDate)
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
      <View  w style={styles.eventNameView}>
        <Text style={[styles.title,{fontFamily:'HKGroteskBold'}]}>{item.title}</Text>
        <Text style={styles.title}>
          {item.start_date.originalStartDate} / {item.end_date.originalEndDate}
        </Text>
       
      </View>
    </View>
  );
};

export default EventCard;
