import { ScrollView, Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./WineryStyle";

const Winery = ({ route }) => {
  console.log(route.params.item);

  function htmlFormat(text) {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: route.params.item.logo }} />
      <Text>{route.params.item.title}</Text>
      <Text>{htmlFormat(route.params.item.content)}</Text>
    </ScrollView>
  );
};

export default Winery;
