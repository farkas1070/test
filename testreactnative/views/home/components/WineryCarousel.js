import { Text, View, useWindowDimensions, FlatList, Image } from "react-native";
import React, { useContext } from "react";
import { styles } from "./WineryCarouselStyle";
import { WineriesContext } from "../../../context/GlobalContext";
import WineryCard from "./WineryCard";
import { FontsContext } from "../../../context/GlobalContext";
import WineIcon from "../../../assets/homepageicons/whiteWineryIcon.svg"
const WineryCarousel = () => {
  const [wineries] = useContext(WineriesContext);

  const renderItem = ({ item }) => {
    return <WineryCard item={item} />;
  };
  const fontsLoaded = useContext(FontsContext);
  

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <WineIcon width={40} height={40} style={styles.icon}></WineIcon>
      </View>
      <Text style={[styles.winemakersText,{fontFamily:'HKGrotesk'}]}>DISCOVER {"\n"}THE WINEMAKERS</Text>
      <View style={{marginTop:30}}>
        <FlatList
          data={wineries}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default WineryCarousel;
