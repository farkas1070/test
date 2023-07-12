import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { styles } from "./NoDataViewStyle";
import {
  getWineries,
  getNews,
  getEvents,
} from "../../controllers/WordpressProvider";
import {
  WineriesContext,
  EventsContext,
  NewsContext,
  LoadingContext,
  LanguageContext,
} from "../../context/GlobalContext";

const NoDataView = () => {
  const [Wineries, setWineries] = useContext(WineriesContext);
  const [events, setEvents] = useContext(EventsContext);
  const [news, setNews] = useContext(NewsContext);
  const [loading, setLoading] = useContext(LoadingContext);
  const [language, setLanguage] = useContext(LanguageContext);

  const refreshData = async () => {
    console.log("refrsreshed data");
    await getWineries(language).then((response) => {
      response === null ? setWineries(false) : setWineries(response);
    });
    await getNews(language).then((response) => {
      response === null ? setNews(false) : setNews(response);
    });
    await getEvents(language).then((response) => {
      response === null ? setEvents(false) : setEvents(response);
    });
    setLoading(false);
  };
  return (
    <View style={styles.maincontainer}>
      <Text>Hiba Történt az Adat beolvasása során, próbáld késöbb</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1747/1747789.png",
        }}
      />
      <TouchableOpacity
        onPress={() => {
          refreshData();
        }}
        style={styles.refreshbutton}
      >
        <Text>Frissités</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoDataView;
