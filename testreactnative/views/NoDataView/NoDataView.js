import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
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
import { SafeAreaView } from "react-native-safe-area-context";

const NoDataView = () => {
  const [Wineries, setWineries] = useContext(WineriesContext);
  const [events, setEvents] = useContext(EventsContext);
  const [news, setNews] = useContext(NewsContext);
  const [loading, setLoading] = useContext(LoadingContext);
  const [language, setLanguage] = useContext(LanguageContext);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      refreshData();
      setRefreshing(false);
    }, 2000);
  }, []);

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
    <View style={{ flex: 1, marginTop: 30 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1747/1747789.png",
            }}
          />
          <Text style={styles.errorText}>
            Hiba történt az alkalmazás betöltése során! Csúsztass lefelé a
            alkalmazás újratöltéséhez.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default NoDataView;
