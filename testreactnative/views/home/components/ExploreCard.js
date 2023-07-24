import { Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./ExploreCardStyle";

const ExploreCard = ({ item }) => {
  return (
    <ImageBackground
      source={{ uri: item.imageUrl }}
      resizeMode="cover"
      style={styles.image}
      imageStyle={{ borderRadius: 10 }}
    >
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </ImageBackground>
  );
};

export default ExploreCard;
