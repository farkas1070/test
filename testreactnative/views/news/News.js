import { TextInput, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { getNews } from "../../controllers/WordpressProvider";
import { styles } from "./NewsStyle";
import Card from "./components/Card";
import { NewsContext } from "../../context/GlobalContext.js";
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
      <TextInput
        style={styles.textinput}
        placeholder="Keresés"
        placeholderTextColor="#000"
        value={searchText}
        onChangeText={(value) => setSearchText(value)}
      />
      <ScrollView style={styles.maincontainer}>
        {filterItems().map((item, index) => {
          return <Card item={item} index={index} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default News;
