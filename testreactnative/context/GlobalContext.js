import React, { useEffect, createContext, useState } from "react";
import { I18n } from "i18n-js";
import { hu, en, de } from "../lang/localizations";
export const WineriesContext = createContext();
export const EventsContext = createContext();
export const NewsContext = createContext();
export const LanguageContext = createContext();
export const LoadingContext = createContext();
export const ServicesContext = createContext();
export const I18nContext = createContext();

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getWineries,
  getEvents,
  getNews,
  getWineries2,
} from "../controllers/WordpressProvider";
import { set } from "react-native-reanimated";

export const GlobalContextProvider = (props) => {
  const [Wineries, setWineries] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(null);

  const [i18n, setI18n] = useState(new I18n({ hu, en, de }));

  useEffect(() => {
    const getLanguage = async () => {
      try {
        let storedlanguage = await AsyncStorage.getItem("Language");
        if (storedlanguage === null) {
          storedlanguage = "hu";
        }
        console.log(storedlanguage);


        i18n.locale = storedlanguage;
        setLanguage(storedlanguage);
        /*} fetchWineries(value); */
        await getWineries2(storedlanguage).then((response) => {
          const { wineriesData, uniqueServices } = response;
          console.log(uniqueServices)
          if (!wineriesData || !uniqueServices) {
            setWineries(false);
          } else {
            setWineries(wineriesData);
            setServices(uniqueServices);
          }
        });

        await getNews(storedlanguage).then((response) => {
          response === null ? setNews(false) : setNews(response);
        });
        await getEvents(storedlanguage).then((response) => {
          response === null ? setEvents(false) : setEvents(response);
        });
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(null);
      }
    };

    getLanguage();
  }, [language]);

  return (
    <WineriesContext.Provider value={[Wineries, setWineries]}>
      <NewsContext.Provider value={[news, setNews]}>
        <EventsContext.Provider value={[events, setEvents]}>
          <ServicesContext.Provider value={[services,setServices]}>
            <LanguageContext.Provider value={[language, setLanguage]}>
              <LoadingContext.Provider value={[loading, setLoading]}>
                <I18nContext.Provider value={[i18n, setI18n]}>
                  {props.children}
                </I18nContext.Provider>
              </LoadingContext.Provider>
            </LanguageContext.Provider>
          </ServicesContext.Provider>
        </EventsContext.Provider>
      </NewsContext.Provider>
    </WineriesContext.Provider>
  );
};
