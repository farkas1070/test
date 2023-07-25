import React, { useContext } from "react";
import { styles } from "./FilterCarouselStyle";
import { View, Dimensions, Text, FlatList, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ServicesContext } from "../../../context/GlobalContext";
import { SvgCssUri } from "react-native-svg";

const FilterCarousel = () => {
  const width = Dimensions.get("window").width;
  const [services] = useContext(ServicesContext);

  const itemWidth = width / 5;

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { width: itemWidth }]}>
        <View style={[styles.icon]}>
          <SvgCssUri uri={item.acf.icon_2} width={60} height={60} />
          
        </View>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.carousel}>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Convert id to string
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FilterCarousel;
