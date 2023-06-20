import { ScrollView, Text, TextInput, Image } from "react-native";
import React from "react";
import { styles } from "./WineryStyle";
import Placeholder from "../../assets/placeholder.png";
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import {tagsStyles} from "./ContentStyle"
const Winery = ({ route }) => {
  const { width } = useWindowDimensions();
  const source = {
    html: route.params.item.content
  };

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={
          route.params.item.logo ? { uri: route.params.item.logo } : Placeholder
        }
      />
      <Text>{route.params.item.title}</Text>
      
      <RenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={tagsStyles}
    />
    </ScrollView>
  );
};

export default Winery;
