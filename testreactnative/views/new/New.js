import {
  Image,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./NewStyle";
import TopHeaderImage from "../../components/TopHeaderImage";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderHtml from "react-native-render-html";
import { tagsStyles } from "./HtmlContentStyle";

const New = ({ route }) => {
  const item = route.params.item;
  const source = {
    html: item.content,
  };
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <TopHeaderImage item={item.image} />
        <View style={styles.bodyContainer}>
          <Text style={styles.dateMonthYearText}>
            {`${item.date.day}, ${item.date.month}, ${item.date.year}`}
          </Text>
          <Text style={styles.titleText}>{item.title}</Text>
          <RenderHtml
            source={source}
            contentWidth={width}
            tagsStyles={tagsStyles}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default New;
