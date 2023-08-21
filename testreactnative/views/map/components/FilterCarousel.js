import React, { useContext, useState, useEffect } from "react";
import { styles } from "./FilterCarouselStyle";
import {
  View,
  Dimensions,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ServicesContext } from "../../../context/GlobalContext";
import { SvgCssUri } from "react-native-svg";
import { FontsContext, WineriesContext } from "../../../context/GlobalContext";

const FilterCarousel = ({ shouldFilterAutomatically, passedService }) => {
  const width = Dimensions.get("window").width;
  const [services] = useContext(ServicesContext);
  const fontsLoaded = useContext(FontsContext);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [wineries, setWineries] = useContext(WineriesContext);
  const [filteredWineries, setFilteredWineries] = useState([...wineries]);

  if (!fontsLoaded) {
    return null;
  }

  const handleButtonPress = (index, selected) => {
    if (selectedButtonIndex === index) {
      setSelectedButtonIndex(-1);
      setWineries(filteredWineries);
    } else {
      setSelectedButtonIndex(index);
      const testFiltered = filteredWineries.filter((winery) => {
        if (winery.services && winery.services !== null) {
          return winery.services.some(
            (service) =>
              service.name.toLowerCase() === selected.name.toLowerCase()
          );
        } else {
          return false;
        }
      });
      setWineries(testFiltered);
    }
  };
  
  useEffect(() => {
    if (shouldFilterAutomatically) {
      let serviceIndex = services.findIndex(service => service.name === passedService.name);
      handleButtonPress(serviceIndex, passedService);
    }
  }, [passedService]);

  const renderItem = ({ item, index }) => {
    const isSelected = selectedButtonIndex === index;

    return (
      <TouchableOpacity
        key={index}
        style={[isSelected ? styles.selectedButton : styles.unselectedButton]}
        onPress={() => handleButtonPress(index, item)}
      >
        <SvgCssUri
          uri={isSelected ? item.icon1 : item.icon2}
          width={60}
          height={60}
        />
        <Text
          style={[
            styles.text,
            {
              fontFamily: "HKGrotesk",
              color: isSelected ? "white" : "#352269",
            },
          ]}
        >
          {item.name}
        </Text>
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
