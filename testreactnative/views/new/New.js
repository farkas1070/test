import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./NewStyle";
import TopHeaderImage from "../../components/TopHeaderImage";


const New = ({ route }) => {
  console.log(route.params.item);
  return (
    <View>
      <TopHeaderImage item={route.params.item.image}/>
      <Text>{route.params.item.title}</Text>
    </View>
  );
};

export default New;
