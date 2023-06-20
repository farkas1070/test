import { ScrollView, Text, TextInput, Image } from "react-native";
import React from "react";
import { styles } from "./WineryStyle";
import Placeholder from "../../assets/placeholder.png";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
const Winery = ({ route }) => {
  const { width } = useWindowDimensions();
  const winery = route.params.item
  const source = {
    html: winery.content

  };
  
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={
          winery.logo ? { uri: winery.logo } : Placeholder
        }
      />
      <Text>{winery.title}</Text>
      <Text>tulajdonos: {winery.owner_name === ""? "nincs megadva":winery.owner_name}</Text>
      <Text>Cím: {winery.connection.adress === undefined? "nincs megadva":winery.connection.adress }</Text>
      <Text>Telefon: {winery.connection.telephone == ""? "nincs megadva":winery.connection.telephone}</Text>
      <Text>Facebook: {winery.connection.social.facebook == ""? "nincs megadva":winery.connection.social.facebook}</Text>
      <Text>Intagram: {winery.connection.social.instagram == ""? "nincs megadva":winery.connection.social.instagram}</Text>
      <Text>LinkedIn: {winery.connection.social.linkedin == ""? "nincs megadva":winery.connection.social.linkedin}</Text>
      <Text>Weboldal: {winery.connection.website}</Text>
      <RenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={tagsStyles}
    />
    </ScrollView>
  );
};

export default Winery;
