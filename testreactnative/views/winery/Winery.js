import { ScrollView, Text, TextInput, Image } from "react-native";
import React from "react";
import { styles } from "./WineryStyle";
import Placeholder from "../../assets/placeholder.png"
const Winery = ({ route }) => {
  function htmlFormat(text) {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={route.params.item.logo ? { uri: route.params.item.logo } : Placeholder} />
      <Text>{route.params.item.title}</Text>
      <Text>{htmlFormat(route.params.item.content)}</Text>
    </ScrollView>
  );
};

export default Winery;
