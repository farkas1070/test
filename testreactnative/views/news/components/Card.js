import React from "react";
import { Text, View, Image, TouchableOpacity,useWindowDimensions } from "react-native";
import { styles } from "./CardStyle";
import Placeholder from "../../../assets/placeholder.png";
import { useNavigation } from "@react-navigation/core";
import CardImage from "./CardImage";
import RenderHtml from "react-native-render-html";
import { tagsStyles } from "./ContentExcerptStyle";

const Card = ({ item }) => {
  const navigation = useNavigation();
  const source = {
    html: item.excerpt,
  };
  const { width } = useWindowDimensions();
  const formattedString = item.date.replace('T', ' ');
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("New", { item: item })}
      style={styles.card}
    >
      <Text style={styles.dateText}>{formattedString}</Text>
      <Text  style={styles.titleText}>{item.title}</Text>
      <RenderHtml
        source={source}
        contentWidth={width}
        tagsStyles={tagsStyles}
      />
      <CardImage item={item.image}/>
      <View style={styles.lineBreak}>
        
      </View>

    </TouchableOpacity>
  );
};

export default Card;
