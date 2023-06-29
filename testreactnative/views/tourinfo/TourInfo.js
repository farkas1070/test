import React from "react";
import { View, Text } from "react-native";

const TourInfo = ({ route }) => {
  return (
    <View>
      <Text>{route.params.item.name}</Text>
      <Text>{route.params.item.duration}</Text>
      <Text>{route.params.item.tour_mode}</Text>
    </View>
  );
};

export default TourInfo;
