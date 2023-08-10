import {
  Image,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React,{useContext} from "react";
import { styles } from "./NewStyle";
import TopHeaderImage from "../../components/TopHeaderImage";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderHtml from "react-native-render-html";
import { tagsStyles } from "./HtmlContentStyle";
import Placeholder from "../../assets/placeholder.png";
import { FontsContext } from "../../context/GlobalContext";

const New = ({ route }) => {
  const item = route.params.item;
  const source = {
    html: item.content,
  };
  const fontsLoaded = useContext(FontsContext);
  const { width } = useWindowDimensions();
  if(!fontsLoaded) {
    return null
  }
  return (
    <View style={styles.safeAreaView}>
      <ScrollView>
        <TopHeaderImage item={item.image} />
        <View style={styles.bodyContainer}>
          <Text style={[styles.dateMonthYearText,{fontFamily:'HKGrotesk'}]}>
            {`${item.date.day}, ${item.date.month}, ${item.date.year}`}
          </Text>
          <Text style={[styles.titleText,{fontFamily:'HKGrotesk'}]}>{item.title}</Text>
          <RenderHtml
            source={source}
            contentWidth={width}
            tagsStyles={tagsStyles}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default New;
