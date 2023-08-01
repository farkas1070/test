import { View, ScrollView,  Text } from "react-native";
import React, {  useState, useContext } from "react";
import { styles } from "./NewsStyle";
import Card from "./components/Card";
import { NewsContext } from "../../context/GlobalContext.js";
import SearchBar from "./components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontsContext } from "../../context/GlobalContext.js";

const News = () => {
  const [News] = useContext(NewsContext);
  const [searchText, setSearchText] = useState("");
  const fontsLoaded = useContext(FontsContext);
  function filterItems() {
    return News.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  if (!fontsLoaded) {
    return null; 
  }

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.header}>
        <SearchBar onSearch={setSearchText} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containercontent}
      >
        <View style={styles.newsTextContainer}>
          <Text style={[styles.toptext,{fontFamily:"HKGrotesk"}]}>News</Text>
        </View>
        {filterItems().map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
