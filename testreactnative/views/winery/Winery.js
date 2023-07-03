import {
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Linking,
  Platform 
} from "react-native";
import React from "react";
import { styles } from "./WineryStyle";
import Placeholder from "../../assets/placeholder.png";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import { tagsStyles } from "./ContentStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from 'expo-location';

const Winery = ({ route }) => {
  const { width } = useWindowDimensions();
  const winery = route.params.item;
  const source = {
    html: winery.content,
  };
  const getCurrentLocation = async () => {
    try {
      // Check if location permissions are granted
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Location permission denied');
        return;
      }
      
      // Get the current position
      const { coords } = await Location.getCurrentPositionAsync({});
      
      const { latitude, longitude } = coords;
      
      // Do something with the latitude and longitude
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
      return coords
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const openGoogleMaps = async  () =>{
    const currentLocation = await getCurrentLocation();
    console.log(winery.map)
    if (Platform.OS === 'ios') {
      Linking.openURL(
        `maps://app?saddr=${currentLocation.latitude}+${currentLocation.longitude}&daddr=${winery.map.lat}+${winery.map.lng}`
      )
    } else {
      Linking.openURL(
        `https://www.google.com/maps/dir/?api=1&origin=${currentLocation.latitude}+${currentLocation.longitude}&destination=${winery.map.lat},${winery.map.lng}`
      )
    }
    

  }

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
      <TouchableOpacity style={styles.opengooglemapsbutton} onPress={()=>{openGoogleMaps()}}>
        <MaterialCommunityIcons name="google-maps" size={24} color="black" />
        <Text>Mutasd Google Mapsen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Winery;
