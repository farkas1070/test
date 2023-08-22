import { TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./TopHeaderImageStyle";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowIcon from "../assets/eventassets/arrowIcon.svg";
import PlaceholderImage from "../assets/eventassets/placeholderImage.jpg";

const TopHeaderImage = ({ item }) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={item ? { uri: item } : PlaceholderImage}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowIcon
            width={35}
            height={35}
            style={styles.backButton}
          ></ArrowIcon>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TopHeaderImage;
