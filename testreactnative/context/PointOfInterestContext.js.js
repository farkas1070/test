import React, { useEffect, createContext, useState } from "react";
export const WineriesContext = createContext();
export const EventsContext = createContext();
export const NewsContext = createContext();

import {
  getWineries,
  getEvents,
  getNews,
} from "../controllers/WordpressProvider";

export const PointOfInterestProvider = (props) => {
  const [Wineries, setWineries] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchWineries = async () => {
      const response = await getWineries();
      setWineries(response);
    };
    const fetchEvents = async () => {
      const response = await getEvents();
      setEvents(response);
    };
    const fetchNews = async () => {
      const response = await getNews();
      setNews(response);
    };

    fetchWineries();
    fetchEvents();
    fetchNews()
  }, []);

  return (
    <WineriesContext.Provider value={[Wineries, setWineries]}>
      <NewsContext.Provider value={[news, setNews]}>
        <EventsContext.Provider value={[events, setEvents]}>
      {props.children}
      </EventsContext.Provider>
      </NewsContext.Provider>
    </WineriesContext.Provider>
  );
};
