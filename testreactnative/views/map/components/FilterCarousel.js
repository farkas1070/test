import React, { useContext, useState } from "react";
import { styles } from "./FilterCarouselStyle";
import { View, Dimensions, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ServicesContext } from "../../../context/GlobalContext";
import { SvgCssUri } from "react-native-svg";
import { useFonts } from "expo-font";
import HKGrotesk from "../../../fonts/HankenGrotesk-Regular.ttf";

const FilterCarousel = () => {
  const width = Dimensions.get("window").width;
  const [services] = useContext(ServicesContext);

  const itemWidth = width / 5;
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [loaded] = useFonts({
    HKGrotesk: HKGrotesk,
  });

  if (!loaded) {
    return null;
  }
  const handleButtonPress = (index) => {
    setSelectedButtonIndex(index);
  };

  const renderItem = ({ item, index }) => {
    const isSelected = selectedButtonIndex === index;

    return (
      <TouchableOpacity key={index} style={[styles.slide, { width: itemWidth }]} onPress={() => handleButtonPress(index)}>
        <View style={[isSelected ? styles.selectedButton : styles.icon]}>
          <SvgCssUri uri={isSelected? item.acf.icon: item.acf.icon_2} width={60} height={60} />
          <Text style={[styles.text, { fontFamily: 'HKGrotesk', color: isSelected ? 'white' : '#352269' }]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.carousel}>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FilterCarousel;