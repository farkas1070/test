import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useContext } from "react";
import { styles } from "./EventCarouselStyle";
import Carousel from "react-native-snap-carousel-v4";
import EventCard from "./EventCard";
import { EventsContext } from "../../../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";

const EventCarousel = () => {
  const carouselRef = useRef(null);
  const [events, setEvents] = useContext(EventsContext);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Event", { item: item })}>
        <EventCard item={item} />
      </TouchableOpacity>
    );
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
