import { Text, Image, ScrollView } from "react-native";
import React from "react";
import Placeholder from "../../assets/placeholder.png";
import { styles } from "./EventStyle";

const Event = ({ route }) => {
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={
          route.params.item.image
            ? { uri: route.params.item.image }
            : Placeholder
        }
      />
      <Text>{route.params.item.title}</Text>
    </ScrollView>
  );
};

export default Event;
