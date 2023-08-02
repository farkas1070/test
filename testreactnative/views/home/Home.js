import { Text, View, ScrollView } from "react-native";
import React, { useContext } from "react";
import { styles } from "./HomeStyle";
import EventCarousel from "./components/EventCarousel";
import ExploreCarousel from "./components/ExploreCarousel";
import ServiceCarousel from "./components/ServiceCarousel";
import WineryCarousel from "./components/WineryCarousel";
import { NewsContext } from "../../context/GlobalContext";
import Header from "./components/Header";
import { FontsContext } from "../../context/GlobalContext";
const Home = () => {
  const [news, setNews] = useContext(NewsContext);
  const latestNews = news[0];
  console.log(latestNews);
  const fontsLoaded = useContext(FontsContext);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.maincontainer}>
      <Header></Header>

      <ScrollView style={styles.scrollView} horizontal={false}>
        <View style={styles.exploreSection}>
          <ExploreCarousel />
        </View>
        <View style={styles.latestnewssection}>
          <View style={styles.topContainer}>
            <Text style={[styles.latestnewstext, { fontFamily: "HKGrotesk" }]}>
              Latest News
            </Text>
            <Text style={[styles.seeMoreText, { fontFamily: "HKGrotesk" }]}>
              See all
            </Text>
          </View>
          <View style={styles.latestContainer}>
            <Text
              style={[styles.shortDateText, { fontFamily: "HKGrotesk" }]}
            >{`${latestNews.date.day}, ${latestNews.date.month}, ${latestNews.date.year}`}</Text>
            <Text style={[styles.shorttitletext, { fontFamily: "HKGrotesk" }]}>
              {latestNews.title}
            </Text>
          </View>
        </View>

        <View style={styles.wineriesCarouselSection}>
          <WineryCarousel />
        </View>
        <View style={styles.eventsection}>
          <Text style={styles.eventtext}>Upcoming Events</Text>
          <View style={styles.carouselcontainer}>
            <EventCarousel />
          </View>
        </View>

        <View style={styles.lookForWineriesSection}>
          <Text style={styles.lookForWineriesText}>Look For Winery to</Text>
          <ServiceCarousel />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
