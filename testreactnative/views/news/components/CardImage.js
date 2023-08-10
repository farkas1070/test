import { Text, View, Image } from "react-native";
import React,{useContext} from "react";
import { styles } from "./CardImageStyle";
import Placeholder from "../../../assets/placeholder.png";
import PlaceholderImage from "../../../assets/newsassets/placeholderImage.jpg"
import { FontsContext } from "../../../context/GlobalContext";
const CardImage = ({ item }) => {
  const fontsLoaded = useContext(FontsContext);
  
  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View>
      <Image resizeMode="contain" source={item ? { uri: item } : PlaceholderImage} style={styles.image} />
      
    </View>
  );
};

export default CardImage;
