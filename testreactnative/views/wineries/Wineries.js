import { Text, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState,useContext } from "react";

import { styles } from "./WineriesStyle";
import Card from "./components/Card";
import { pointsOfInterestContext } from "../../context/PointOfInterestContext.js"
const Wineries = () => {
  const [pointsOfInterest, setpointsOfInterest] = useContext(pointsOfInterestContext);

  

  return (
    <View style={styles.maincontainer}>
      
      <ScrollView style={styles.scrollview}>
        {pointsOfInterest.map((item, index) => {
          return <Card item={item} index={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Wineries;
