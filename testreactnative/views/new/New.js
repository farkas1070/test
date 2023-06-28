import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./NewStyle";
import Placeholder from "../../assets/placeholder.png";

const New = ({ route }) => {
  console.log(route.params.item);
  return (
    <View>
      <Image style={styles.image} source={
          route.params.item.image
            ? { uri: route.params.item.image }
            : Placeholder
        } />
      <Text>{route.params.item.title}</Text>
    </View>
  );
};

export default New;
