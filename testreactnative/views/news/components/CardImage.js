import { Text, View, Image } from "react-native";
import React,{useContext} from "react";
import { styles } from "./CardImageStyle";
import Placeholder from "../../../assets/placeholder.png";

import { FontsContext } from "../../../context/GlobalContext";
const CardImage = ({ item }) => {
  const fontsLoaded = useContext(FontsContext);
  
  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View>
      <Image source={item ? { uri: item } : Placeholder} style={styles.image} />
      <View style={styles.readMoreTag}>
        <Text style={[styles.readmoretext,{fontFamily:'HKGrotesk'}]}>Read More</Text>
      </View>
    </View>
  );
};

export default CardImage;
