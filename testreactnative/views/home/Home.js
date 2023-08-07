import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./HomeStyle";
import EventCarousel from "./components/EventCarousel";
import ExploreCarousel from "./components/ExploreCarousel";
import ServiceCarousel from "./components/ServiceCarousel";
import WineryCarousel from "./components/WineryCarousel";
import { NewsContext } from "../../context/GlobalContext";
import Header from "./components/Header";
import { FontsContext } from "../../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
import { I18nContext } from "../../context/GlobalContext";
const Home = () => {
  const [news, setNews] = useContext(NewsContext);
  const latestNews = news[0];
  const navigation = useNavigation();
  const [i18n] = useContext(I18nContext);

  const fontsLoaded = useContext(FontsContext);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.maincontainer}>
      <Header />

      <ScrollView style={styles.scrollView} horizontal={false}>
        <View style={styles.exploreSection}>
          <ExploreCarousel />
        </View>
        <View style={styles.eventsection}>
          <View style={styles.eventsTopContainer}>
            <Text style={styles.upcomingEventsText}>UPCOMING EVENTS</Text>
            <Text style={styles.seeMoreText}>See all</Text>
          </View>
          <View style={styles.carouselcontainer}>
            <EventCarousel />
          </View>
        </View>
        <View style={styles.latestnewssection}>
          <View style={styles.topContainer}>
            <Text style={[styles.latestnewstext, { fontFamily: "HKGrotesk" }]}>
              {i18n.t("latestnews")}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(i18n.t("news"));
              }}
            >
              <Text style={[styles.seeMoreText, { fontFamily: "HKGrotesk" }]}>
                {i18n.t("seeall")}
              </Text>
            </TouchableOpacity>
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
        <View style={styles.lookForWineriesSection}>
          <ServiceCarousel />
        </View>

        <View style={styles.eventsection}>
          <View style={styles.eventsTopContainer}>
            <Text style={styles.upcomingEventsText}>
              {i18n.t("upcomingevents")}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(i18n.t("events"));
              }}
            >
              <Text style={styles.seeMoreText}>{i18n.t("seeall")}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.carouselcontainer}>
            <EventCarousel />
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;
