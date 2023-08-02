import { Text, View, Image, ImageBackground } from "react-native";
import React,{useContext} from "react";
import { styles } from "./ExploreCardStyle";
import { FontsContext } from "../../../context/GlobalContext";
import WineIcon from "../../../assets/homepageicons/wineriesIcon.svg"
import Events from "../../../assets/homepageicons/eventsIcon.svg"
import MapIcon from "../../../assets/homepageicons/mapIcon.svg"
import ToursIcon from "../../../assets/homepageicons/toursIcon.svg"
import NewsIcon from "../../../assets/homepageicons/newsIcon.svg"
const ExploreCard = ({ item }) => {
  const fontsLoaded = useContext(FontsContext);
  

  if (!fontsLoaded) {
    return null;
  }
  let icon = null;
  switch (item.id) {
    case "1":
      icon = <WineIcon width={30} height={30} style={styles.icon} />;
      break;
    case "2":
      icon = <MapIcon width={30} height={30} style={styles.icon}/>;
      break;
    case "3":
      icon = <Events width={30} height={30} style={styles.icon}/>;
      break;
    case "4":
      icon = <NewsIcon width={30} height={30} style={styles.icon}/>;
      break;
    case "5":
      icon = <ToursIcon width={30} height={30} style={styles.icon}/>;
      break;
    default:
      icon = null;
  }
  return (
    <View style={styles.cardContainer}>
      
      {icon} 
      <View style={styles.textView}>
        <Text style={[styles.text,{fontFamily:'HKGroteskBold'}]}>{item.title}</Text>
      </View>
    </View>
  );
};

export default ExploreCard;
