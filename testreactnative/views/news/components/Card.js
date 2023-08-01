import React,{useContext} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { styles } from "./CardStyle";

import { useNavigation } from "@react-navigation/core";
import CardImage from "./CardImage";
import RenderHtml from "react-native-render-html";
import { tagsStyles } from "./ContentExcerptStyle";


import { FontsContext } from "../../../context/GlobalContext";
const Card = ({ item }) => {
  const navigation = useNavigation();
  const fontsLoaded = useContext(FontsContext);
  const source = {
    html: item.excerpt,
  };
  const { width } = useWindowDimensions();
  if (!fontsLoaded) {
    return null; 
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("New", { item: item })}
      style={styles.card}
    >
      <Text style={[styles.dateText,{fontFamily:'HKGrotesk'}]}>
        {`${item.date.day}, ${item.date.month}, ${item.date.year}`}{" "}
      </Text>
      <Text style={[styles.titleText,{fontFamily:'HKGrotesk'}]}>{item.title}</Text>
      <RenderHtml
        source={source}
        contentWidth={width}
        tagsStyles={tagsStyles}
      />
      <CardImage item={item.image} />
      <View style={styles.lineBreak}></View>
    </TouchableOpacity>
  );
};

export default Card;
