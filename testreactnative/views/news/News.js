import { TextInput, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getHírek } from "../../controllers/PointOfInterestController";
import { styles } from "./NewsStyle";
import Card from "./components/Card";

const News = () => {
  const [News, setNews] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHírek();

      const extractedData = response.map((item) => {
        return {
          title: item.title.rendered,
          excerpt: item.excerpt.rendered,
          content: item.content.rendered,
          image: item?._embedded["wp:featuredmedia"]?.[0]?.source_url,
        };
      });
      setNews(extractedData);
    };

    fetchData();
  }, []);

  function filterItems() {
    return News.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
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
