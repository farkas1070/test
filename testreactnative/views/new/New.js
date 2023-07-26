import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./NewStyle";
import TopHeaderImage from "../../components/TopHeaderImage";
import { SafeAreaView } from "react-native-safe-area-context";

const New = ({ route }) => {
  const item = route.params.item
  console.log(item.date)
  

  // Step 3: Format the extracted values into the desired string format
  
  return (
    <SafeAreaView>
      <TopHeaderImage item={item.image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.dateMonthYearText}>
        {`${item.date.day}, ${item.date.month}, ${item.date.year}`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default New;
