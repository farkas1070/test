import { View, ScrollView, Image } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { styles } from "./NewsStyle";
import Card from "./components/Card";
import { NewsContext } from "../../context/GlobalContext.js";
import SearchBar from "./components/Search";
import {
  SafeAreaView,
  
} from 'react-native-safe-area-context';
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
      <SearchBar onSearch={setSearchText} />
      <ScrollView style={styles.container}>
        {filterItems().map((item, index) => {
          return <Card item={item} index={index} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
