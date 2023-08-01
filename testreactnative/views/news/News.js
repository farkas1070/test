import { View, ScrollView, Image, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { styles } from "./NewsStyle";
import Card from "./components/Card";
import { NewsContext } from "../../context/GlobalContext.js";
import SearchBar from "./components/Search";
import { SafeAreaView } from "react-native-safe-area-context";

const News = () => {
  const [News, setNews] = useContext(NewsContext);
  const [searchText, setSearchText] = useState("");

  function filterItems() {
    return News.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
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
          <Text style={styles.toptext}>News</Text>
        </View>
        {filterItems().map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
