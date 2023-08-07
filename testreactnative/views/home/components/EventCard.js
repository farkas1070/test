import { Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { styles } from "./EventCardStyle";
import PlaceholderPic from "../../../assets/homepageicons/placeholderImage.jpg";
import { FontsContext } from "../../../context/GlobalContext";
import LocationIcon from "../../../assets/wineryassets/greyLocationIcon.svg";
const EventCard = ({ item }) => {
  const fontsLoaded = useContext(FontsContext);

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
      <View style={styles.eventNameView}>
        <View style={styles.innerContainer}>
          <Text style={[styles.dateText, { fontFamily: "HKGroteskBold" }]}>
            {item.start_date.day === item.end_date.day
              ? `${item.start_date.day}, ${item.start_date.month}`
              : `${item.start_date.day}, ${item.start_date.month} - ${item.end_date.day}, ${item.end_date.month}`}
          </Text>
          <Text style={[styles.title, { fontFamily: "HKGroteskBold" }]}>
            {item.title}
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <LocationIcon width={15} height={15}></LocationIcon>
          <Text style={[styles.locationText, { fontFamily: "HKGrotesk" }]}>
            {item.location === undefined ? "Nincs Helyszín" : item.location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
