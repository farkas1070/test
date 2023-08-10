import { Text, View, Image, TouchableOpacity } from "react-native";
import React,{useContext} from "react";
import { styles } from "./CardStyle";
import { useNavigation } from "@react-navigation/core";
import Placeholder from "../../../assets/placeholder.png";
import PlaceholerImage from "../../../assets/eventassets/placeholderImage.jpg"
import { FontsContext } from "../../../context/GlobalContext";
const Card = ({ item, index }) => {
  const navigation = useNavigation();
  const fontsLoaded = useContext(FontsContext);
  const startDate = new Date(item.start_date.originalStartDate);
  const endDate = new Date(item.end_date.originalEndDate);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("Event", { item: item })}
    >
      
      <Image
        source={item.image ? { uri: item.image } : PlaceholerImage}
        style={styles.cardImage}
        resizeMode="contain"
      />
      
      <Text style={[styles.cardDescription,{fontFamily:'HKGrotesk'}]}>
      {item.start_date.month} {item.start_date.day},{" "}{startDate.toLocaleTimeString([], {hour: "2-digit",minute: "2-digit",hour12: false, // Use 24-hour format
})} - {item.start_date.month} {item.start_date.day},{" "}{startDate.toLocaleTimeString([], {hour: "2-digit",minute: "2-digit",hour12: false, // Use 24-hour format
})}
      </Text>
      
      <Text style={[styles.cardTitle,{fontFamily:'HKGroteskBold'}]}>{item.title}</Text>

      
      
    </TouchableOpacity>
  );
};

export default Card;
