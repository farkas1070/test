import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  View,
} from "react-native";
import React, { useContext } from "react";
import { styles } from "./WineryStyle";
import Placeholder from "../../assets/placeholder.png";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import { tagsStyles } from "./ContentStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SvgCssUri } from "react-native-svg";
import { I18nContext } from "../../context/GlobalContext";
import TopHeaderImage from "../../components/TopHeaderImage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Winery = ({ route }) => {
  const { width } = useWindowDimensions();
  const winery = route.params.item;
  const source = {
    html: winery.content,
  };

  const [i18n] = useContext(I18nContext);

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
    <SafeAreaView>
      <ScrollView>
        <TopHeaderImage item={winery.logo ? winery.logo : Placeholder} />

        <View style={styles.topTextContainer}>
          <Text style={styles.nameText}>{winery.title}</Text>
          <Image style={styles.image} source={Placeholder} />
          <View style={styles.infoContainer}>
            <Ionicons name="airplane" size={24} color="black" />
            <Text>{winery.connection.adress}</Text>
          </View>
          <View style={styles.infoContainer2}>
            <Ionicons name="call" size={24} color="black" />
            <Text>{winery.connection.adress}</Text>
          </View>
          <View style={styles.infoContainer2}>
            <Ionicons name="desktop" size={24} color="black" />
            <Text>{winery.connection.adress}</Text>
          </View>
        </View>
        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagsStyles}
        />
        <View style={styles.mainservicecontainer}>
          {winery.services?.map((service, index) => {
            return (
              <View style={{ alignItems: "center" }}>
                <View key={index} style={styles.servicecontainer}>
                  <SvgCssUri uri={service.acf.icon_2} width={65} height={65} />
                </View>
                <View style={{ marginVertical: 10 }}>
                  <Text style={styles.servicetext}>{service.name}</Text>
                </View>
              </View>
            );
          })}
        </View>
        {winery.map.lat != undefined && winery.map.lng != undefined && (
          <TouchableOpacity
            style={styles.opengooglemapsbutton}
            onPress={() => {
              openGoogleMaps();
            }}
          >
            <MaterialCommunityIcons
              name="google-maps"
              size={24}
              color="black"
            />
            <Text>Mutasd a térképen</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Winery;
