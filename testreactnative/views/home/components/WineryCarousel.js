import { Text, View, useWindowDimensions, Image } from "react-native";
import React, { useContext } from "react";
import { styles } from "./WineryCarouselStyle";
import { WineriesContext } from "../../../context/GlobalContext";
import WineryCard from "./WineryCard";
import { FontsContext } from "../../../context/GlobalContext";
import WineIcon from "../../../assets/homepageicons/whiteWineryIcon.svg";
import { FlatList } from "react-native-gesture-handler";
import { I18nContext } from "../../../context/GlobalContext";
const WineryCarousel = () => {
  const [wineries] = useContext(WineriesContext);
  const [i18n] = useContext(I18nContext);

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
      <Text style={[styles.winemakersText, { fontFamily: "HKGrotesk" }]}>
        {i18n.t("discover")} {"\n"}
        {i18n.t("thewinemakers")}
      </Text>
      <View style={{ marginTop: 30 }}>
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
