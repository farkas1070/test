import {
  Text,
  View,

  
  ImageBackground,
} from "react-native";
import React, { useRef,useContext,useState } from "react";
import { styles } from "./ExploreCarouselStyle";
import { FlatList } from "react-native-gesture-handler";
import ExploreCard from "./ExploreCard";
import { FontsContext } from "../../../context/GlobalContext";
const ExploreCarousel = () => {
  
  const fontsLoaded = useContext(FontsContext);
  
  
  if (!fontsLoaded) {
    return null;
  }
  const data = [
    {
      id: "1",
      title: "All Wineries",
      imageUrl:
        "https://www.sonomacounty.com/sites/default/files/styles/profile_photo_full/public/listing_images/profile/3733/tasting_rooms_wineries_Buena_Vista_credit_Scott_Chebegia_Sonoma_County_0170-aebdecf95056a36_aebdeea9-5056-a36a-075788b7f726fb90.jpg?itok=pZ95WsZA",
    },
    {
      id: "2",
      title: "Map",
      imageUrl:
        "https://assets.simpleviewinc.com/simpleview/image/upload/crm/temecula/1_7FB1D5F0-5056-A36A-072CB63393E04AA2-7fb1d4f95056a36_7fb1d64d-5056-a36a-078d7e45abd19780.jpg",
    },
    {
      id: "3",
      title: "Events",
      imageUrl:
        "https://amazingarchitecture.com/storage/268/11056312_image10137.jpg",
    },
    {
      id: "4",
      title: "News",
      imageUrl:
        "https://www.thetopvillas.com/blog/wp-content/uploads/2018/07/wine-featured.jpg",
    },
    {
      id: "5",
      title: "Tours",
      imageUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c7/c0/80.jpg",
    },
  ];

  const renderItem = ({ item }) => {
    return <ExploreCard item={item} />;
  };

  return (
    <ImageBackground
      source={{
        uri: "https://www.thetopvillas.com/blog/wp-content/uploads/2018/07/wine-featured.jpg",
      }}
      resizeMode="cover"
      style={[styles.container]}
    >
      <View style={styles.overlay} />
      <Text style={[styles.exploreText,{fontFamily:'Karma'}]}>Discover {"\n"}the Wine Region</Text>
      <View style={styles.flatListContainer}>
      <FlatList
        data={data}
        disableVirtualization={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
    </ImageBackground>
  );
};

export default ExploreCarousel;
