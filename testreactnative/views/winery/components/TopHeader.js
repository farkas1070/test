import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React,{useContext} from "react";
import { styles } from "./TopHeaderStyle";
import { Ionicons } from "@expo/vector-icons";
import BackIcon from "../../../assets/eventassets/arrowIcon.svg";
import MapIcon from "../../../assets/wineryassets/mapIcon.svg";
import { useNavigation } from "@react-navigation/native";
import Placeholder from "../../../assets/placeholder.png";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaceholderImage from "../../../assets/eventassets/placeholderImage.jpg";
import { I18nContext } from "../../../context/GlobalContext";

const TopHeader = ({ item }) => {
  const navigation = useNavigation();
  const [i18n] = useContext(I18nContext);
  return (
    <ImageBackground
      source={item.banner ? { uri: item.banner } : PlaceholderImage}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon width={30} height={30}></BackIcon>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewOnMap}
          onPress={() => {
            navigation.navigate(i18n.t("wineries"), { winery:item, shouldShowMapFirst:true })
          }}
        >
          <MapIcon width={30} height={30} style={styles.mapIcon}></MapIcon>
          <Text style={styles.viewOnMapText}>View on Map</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TopHeader;
