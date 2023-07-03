import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import React from "react";
import { styles } from "./WineryStyle";
import Placeholder from "../../assets/placeholder.png";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import { tagsStyles } from "./ContentStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Winery = ({ route }) => {
  const { width } = useWindowDimensions();
  const winery = route.params.item;
  const source = {
    html: winery.content,
  };

  const openGoogleMaps = async () => {
    console.log(winery.map);
    if (Platform.OS === "ios") {
      Linking.openURL(`maps://app?&daddr=${winery.map.lat}+${winery.map.lng}`);
    } else {
      Linking.openURL(
        `https://www.google.com/maps/dir/?api=1&destination=${winery.map.lat},${winery.map.lng}`
      );
    }
  };

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={winery.logo ? { uri: winery.logo } : Placeholder}
      />
      <Text>{winery.title}</Text>
      <Text>
        tulajdonos:{" "}
        {winery.owner_name === "" ? "nincs megadva" : winery.owner_name}
      </Text>
      <Text>
        Cím:{" "}
        {winery.connection.adress === undefined
          ? "nincs megadva"
          : winery.connection.adress}
      </Text>
      <Text>
        Telefon:{" "}
        {winery.connection.telephone == ""
          ? "nincs megadva"
          : winery.connection.telephone}
      </Text>
      <Text>
        Facebook:{" "}
        {winery.connection.social.facebook == ""
          ? "nincs megadva"
          : winery.connection.social.facebook}
      </Text>
      <Text>
        Intagram:{" "}
        {winery.connection.social.instagram == ""
          ? "nincs megadva"
          : winery.connection.social.instagram}
      </Text>
      <Text>
        LinkedIn:{" "}
        {winery.connection.social.linkedin == ""
          ? "nincs megadva"
          : winery.connection.social.linkedin}
      </Text>

      <Text>Weboldal: {winery.connection.website}</Text>
      <RenderHtml
        contentWidth={width}
        source={source}
        tagsStyles={tagsStyles}
      />
      {winery.services?.map((service, index) => {
        console.log(service);
        
        return <Text key={index}>{service.name}</Text>;
      })}

      
      {winery.map.lat != undefined && winery.map.lng != undefined && (
        <TouchableOpacity
          style={styles.opengooglemapsbutton}
          onPress={() => {
            openGoogleMaps();
          }}
        >
          <MaterialCommunityIcons name="google-maps" size={24} color="black" />
          <Text>Mutasd Google Mapsen</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default Winery;
