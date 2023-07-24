import React from "react";
import { styles } from "./FilterCarouselStyle";
import { View, Dimensions, Text, FlatList, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FilterCarousel = () => {
  const width = Dimensions.get("window").width;

  const data = [
    { id: 1, name: "Borászat", icon: "wine" },
    { id: 2, name: "Borvidék", icon: "map" },
    { id: 3, name: "Étterem", icon: "restaurant" },
    { id: 4, name: "Szállás", icon: "bed" },
    { id: 5, name: "Program", icon: "calendar" },
    { id: 6, name: "Borászat", icon: "wine" },
    { id: 7, name: "Borvidék", icon: "map" },
    { id: 8, name: "Étterem", icon: "restaurant" },
    { id: 9, name: "Szállás", icon: "bed" },
    { id: 10, name: "Program", icon: "calendar" },
  ];

  const itemWidth = width / 5;

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { width: itemWidth }]}>
        <View style={[styles.icon]}>
          <Ionicons name={item.icon} size={30} color="black" />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.carousel}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Convert id to string
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FilterCarousel;
