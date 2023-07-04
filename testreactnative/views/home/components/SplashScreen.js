import { Text, View,Image,ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./SplashScreenStyle";
const SplashScreen = () => {
  return (
    <View style={styles.maincontainer}>
      
      <Image style={styles.image} source={{uri:'https://cdn.dribbble.com/users/1671756/screenshots/15478350/media/2a2a407a2ba1dd31d07611b134a3e416.gif'}} />
      <ActivityIndicator color="white" style={styles.activityindicator}/>
    </View>
  );
};

export default SplashScreen;
