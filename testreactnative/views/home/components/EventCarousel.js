import { Text, View, useWindowDimensions } from "react-native";
import React, { useRef, useContext } from "react";
import { styles } from "./EventCarouselStyle";
import Carousel from "react-native-snap-carousel-v4";
import EventCard from "./EventCard";
import { EventsContext } from "../../../context/GlobalContext";

const EventCarousel = () => {
  const carouselRef = useRef(null);
  const [events, setEvents] = useContext(EventsContext);
  const { width } = useWindowDimensions();
  const renderItem = ({ item }) => {
    return <EventCard item={item} />;
  };

  return (
    <Carousel
      ref={carouselRef}
      data={events}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.85}
    />
  );
};

export default EventCarousel;
