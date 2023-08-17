import { Text, View, ImageBackground } from "react-native";
import React, { useContext } from "react";
import { styles } from "./ExploreCarouselStyle";
import { FlatList } from "react-native-gesture-handler";
import ExploreCard from "./ExploreCard";
import { FontsContext } from "../../../context/GlobalContext";
import HomepagePic from "../../../assets/homepagePic2.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { I18nContext } from "../../../context/GlobalContext";
import BackgroundPic from "../../../assets/homePagePic3.jpg"
const ExploreCarousel = () => {
  const fontsLoaded = useContext(FontsContext);
  const [i18n] = useContext(I18nContext);

  if (!fontsLoaded) {
    return null;
  }
  const data = [
    {
      id: "1",
      title: "All Wineries",
      imageUrl:
        "https://www.sonomacounty.com/sites/default/files/styles/profile_photo_full/public/listing_images/profile/3733/tasting_rooms_wineries_Buena_Vista_credit_Scott_Chebegia_Sonoma_County_0170-aebdecf95056a36_aebdeea9-5056-a36a-075788b7f726fb90.jpg?itok=pZ95WsZA",
      navigate: i18n.t("wineries"),
    },
    {
      id: "2",
      title: "Map",
      imageUrl:
        "https://assets.simpleviewinc.com/simpleview/image/upload/crm/temecula/1_7FB1D5F0-5056-A36A-072CB63393E04AA2-7fb1d4f95056a36_7fb1d64d-5056-a36a-078d7e45abd19780.jpg",
      navigate: i18n.t("wineries"),
    },
    {
      id: "3",
      title: "Events",
      imageUrl:
        "https://amazingarchitecture.com/storage/268/11056312_image10137.jpg",
      navigate: i18n.t("events"),
    },
    {
      id: "4",
      title: "News",
      imageUrl:
        "https://www.thetopvillas.com/blog/wp-content/uploads/2018/07/wine-featured.jpg",
      navigate: i18n.t("news"),
    },
  ];

  const renderItem = ({ item,index }) => {
    
    if (index === data.length -1) {
      return <ExploreCard item={item} last={true}/>;
    } 
    return <ExploreCard item={item} last={false} />;
    
  };

  return (
    <ImageBackground
      source={BackgroundPic}
      resizeMode="cover"
      style={[styles.container]}
    >
      
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(53, 34, 105, 0.35)", "rgba(240, 238, 239, 1)"]}
        style={styles.background}
        start={{ x: 0.5, y: 0.7 }} // Adjust the y value to change the start position (0 = top, 1 = bottom)
        end={{ x: 0.5, y: 1 }} // End at the bottom of the container
      >
        
        <View style={styles.textContainer}>
          <Text style={[styles.exploreText, { fontFamily: "Karma" }]}>
            {i18n.t("discover")} {"\n"}
            {i18n.t("thewineregion")}
          </Text>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            
            
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default ExploreCarousel;
