import { View, ScrollView, Image } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { styles } from "./NewsStyle";
import Card from "./components/Card";
import { NewsContext } from "../../context/GlobalContext.js";
import SearchBar from "./components/Search";
const News = () => {
  const [News, setNews] = useContext(NewsContext);
  const [searchText, setSearchText] = useState("");

  function filterItems() {
    return News.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return (
    <View style={styles.maincontainer}>
      <SearchBar onSearch={setSearchText} />
      <ScrollView style={styles.maincontainer}>
        {filterItems().map((item, index) => {
          return <Card item={item} index={index} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default News;
