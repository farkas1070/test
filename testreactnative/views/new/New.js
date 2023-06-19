import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./NewStyle";

const New = ({ route }) => {
  console.log(route.params.item);
  return (
    <View>
      <Image style={styles.image} source={{ uri: route.params.item.image }} />
      <Text>{route.params.item.title}</Text>
    </View>
  );
};

export default New;
