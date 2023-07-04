import React, { useEffect, createContext, useState } from "react";
export const WineriesContext = createContext();
export const EventsContext = createContext();
export const NewsContext = createContext();
export const LanguageContext = createContext();
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getWineries,
  getEvents,
  getNews,
} from "../controllers/WordpressProvider";

export const PointOfInterestProvider = (props) => {
  const [Wineries, setWineries] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const fetchWineries = async (language) => {
      const response = await getWineries(language);

      setWineries(response);
    };
    const fetchEvents = async (language) => {
      const response = await getEvents(language);
      setEvents(response);
    };
    const fetchNews = async (language) => {
      const response = await getNews(language);
      setNews(response);
    };

    const getLanguage = async () => {
      try {
        const value = await AsyncStorage.getItem("Language");

        setLanguage(value);
        fetchWineries(value);
        fetchEvents(value);
        fetchNews(value);
      } catch (e) {
        console.log(e);
      }
    };

    getLanguage();
  }, []);

  return (
    <WineriesContext.Provider value={[Wineries, setWineries]}>
      <NewsContext.Provider value={[news, setNews]}>
        <EventsContext.Provider value={[events, setEvents]}>
          <LanguageContext.Provider value={[language, setLanguage]}>
            {props.children}
          </LanguageContext.Provider>
        </EventsContext.Provider>
      </NewsContext.Provider>
    </WineriesContext.Provider>
  );
};
