import { Text, View, Image, TouchableOpacity } from "react-native";
import React,{useContext} from "react";
import { styles } from "./CardStyle";
import { useNavigation } from "@react-navigation/core";
import Placeholder from "../../../assets/placeholder.png";
import LocationIcon from "../../../assets/wineryassets/greyLocationIcon.svg";
import { FontsContext } from "../../../context/GlobalContext";
import PlaceholderPic from "../../../assets/homepageicons/placeholderImage.jpg";
const Card = ({ item, index }) => {
  const navigation = useNavigation();
  const fontsLoaded = useContext(FontsContext);


  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("Winery", { item: item });
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={item.logo ? { uri: item.logo } : PlaceholderPic}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.textContainer}>
        <View>
          <Text style={[styles.title,{fontFamily:"HKGrotesk"}]}>{item.title}</Text>
        </View>
        <View style={styles.addressContainer}>
          <LocationIcon width={18} height={18}></LocationIcon>
          <Text style={[styles.description,{fontFamily:"HKGrotesk"}]}>{item.connection.adress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
