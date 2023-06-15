import { Text, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getBorászatok } from "../../controllers/PointOfInterestController";
import { styles } from "./WineriesStyle";
import Card from "./components/Card";
const Wineries = () => {
  const [pointsOfInterest, setpointsOfInterest] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBorászatok();

      const extractedData = response.map((item) => {
        return {
          title: item.title.rendered,
          content: item.content.rendered,
          logo: item?.acf?.banner?.boraszat_logo?.sizes?.medium,
        };
      });
      setpointsOfInterest(extractedData);
<<<<<<< Updated upstream
      
=======
>>>>>>> Stashed changes
    };

    fetchData();
  }, []);

  return (
    <View style={styles.maincontainer}>
      <></>
      <ScrollView style={styles.scrollview}>
        {pointsOfInterest.map((item, index) => {
          return <Card item={item} index={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Wineries;
