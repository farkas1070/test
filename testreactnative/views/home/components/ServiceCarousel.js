import { View,  Text } from "react-native";
import React, { useContext } from "react";
import { styles } from "./ServiceCarouselStyle";
import { ServicesContext } from "../../../context/GlobalContext";
import { SvgCssUri } from "react-native-svg";
import { FontsContext } from "../../../context/GlobalContext";
import { FlatList } from "react-native-gesture-handler";
const ExploreCarousel = () => {
  const [services, setServices] = useContext(ServicesContext);
  const fontsLoaded = useContext(FontsContext);

  if (!fontsLoaded) {
    return null;
  }
  const renderItem = ({ item }) => {
    return (
      <View style={styles.serviceContainer}>
        <View style={styles.imageContainer}>
          <SvgCssUri uri={item.acf.icon} width={90} height={90} />
          <Text style={[styles.servicetext,{fontFamily:'HKGroteskBold'}]}>{item.name}</Text>
        </View>
        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.lookForWineriesText, {fontFamily:'HKGrotesk'}]}>Look For Winery to</Text>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreCarousel;
