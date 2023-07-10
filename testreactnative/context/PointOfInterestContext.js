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

    const getLanguage = async () => {
      try {
        const value = await AsyncStorage.getItem("Language");

        setLanguage(value);
       /*} fetchWineries(value); */
       await getWineries(value).then((response) => {
        response === null? setWineries(false) : setWineries(response);
       });
       await getNews(value).then((response) => {
        response === null? setNews(false) : setNews(response);
       });
       await getEvents(value).then((response) => {
        response === null? setEvents(false) : setEvents(response);
       });
       
      } catch (error) {

        console.log("elkapva legfölső")


        

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
