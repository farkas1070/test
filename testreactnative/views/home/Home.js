import { Text, View, ScrollView } from "react-native";
import React from "react";
import { styles } from "./HomeStyle";
import EventCarousel from "./components/EventCarousel";
import ExploreCarousel from "./components/ExploreCarousel";
import ServiceCarousel from "./components/ServiceCarousel";
import WineryCarousel from "./components/WineryCarousel";
const Home = () => {
  return (
    <View style={styles.maincontainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.eventsection}>
          <Text style={styles.eventtext}>Upcoming Events</Text>
          <View style={styles.carouselcontainer}>
            <EventCarousel />
          </View>
          <View style={styles.latestnewssection}>
            <View style={styles.underlineview}>
              <Text style={styles.latestnewstext}>Latest News</Text>
            </View>
          </View>
          <View style={styles.dateAndTitleContainer}>
            <Text style={styles.shortDateText}>Date</Text>
            <Text style={styles.shorttitletext}>Short title of news</Text>
          </View>
        </View>

        <View style={styles.exploreSection}>
          <Text style={styles.exploreText}>Explore</Text>
          <ExploreCarousel />
        </View>
        <View style={styles.lookForWineriesSection}>
          <Text style={styles.lookForWineriesText}>Look For Winery to</Text>
          <ServiceCarousel />
        </View>
        <View style={styles.wineriesCarouselSection}>
          <WineryCarousel />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
