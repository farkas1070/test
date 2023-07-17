import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./HomeStyle";

const Home = () => {
  return (
    <View style={styles.maincontainer}>
      <Image
        style={styles.image}
        source={{
          uri: "https://media.istockphoto.com/id/881886686/vector/seamless-background-with-wine-glasses-and-bottles-design-element-for-tasting-menu-wine-list.jpg?s=612x612&w=0&k=20&c=UsHfH9tEhJSBnXn6CmJAlaB5Xsb2x7dnZKQoMBeYS3g=",
        }}
      />
      <View style={styles.home}>
        <Text style={styles.title}>Üdvözöl a Soproni Borvidék!</Text>
      </View>
    </View>
  );
};

export default Home;
