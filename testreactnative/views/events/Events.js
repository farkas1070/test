import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Agenda } from "react-native-calendars";
import { styles } from "./EventsStyle";
import Card from "./components/Card";
import moment from "moment";
import { EventsContext } from "../../context/GlobalContext.js";
import SearchBar from "./components/Search";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontsContext } from "../../context/GlobalContext.js";
import IconCalendar from "../../assets/eventassets/iconCalendar.svg"
import ListIcon from "../../assets/eventassets/listIcon.svg"
const Events = () => {
  const [showListFirst, setShowListFirst] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date().toDateString());
  const [events, setEvents] = useContext(EventsContext);
  const [searchText, setSearchText] = useState("");
  const [currentEvents, setCurrentEvents] = useState([]);
  const fontsLoaded = useContext(FontsContext);
  useEffect(() => {
    // Filter events to find those with dates equal to the currentDate
    events.map((event) => {
      const dateRange = getDatesInRange(
        event.start_date.originalStartDate,
        event.end_date.originalEndDate
      );
      setCurrentEvents(dateRange);
    });
    console.log(currentEvents);
  }, []);

  function showDifferentLayout() {
    setShowListFirst(!showListFirst);
  }

  const filterItems = () => {
    return events.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  if (!fontsLoaded) {
    return null;
  }

  function getDatesInRange(startDate, endDate) {
    const start = moment(startDate);
    const end = moment(endDate);
    const dates = [];
    let currentDate = start.clone();

    while (currentDate.isSameOrBefore(end, "day")) {
      dates.push(currentDate.format("YYYY-MM-DD"));
      currentDate.add(1, "day");
    }

    return dates;
  }

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={{ flexDirection: "row", backgroundColor: "#F0EEEF" }}>
        <SearchBar onSearch={setSearchText} />
      </View>

      <View style={{ width: "100%", flexGrow: 1, backgroundColor: "#f0eeef",marginBottom:70 }}>
        <View style={{width:'100%',flexDirection: "row", justifyContent:'space-between',alignItems:'center',marginTop:10}}>
          <View style={styles.currentEventContainer}>
            <Text
              style={[styles.currentEventText, { fontFamily: "HKGrotesk" }]}
            >
              Minden esemény
            </Text>
          </View>
          {showListFirst ? (
            <TouchableOpacity style={styles.changeButton} onPress={() => {
              showDifferentLayout();
            }}>
              <IconCalendar width={30} height={30}></IconCalendar>
              
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.changeButton} onPress={() => {
              showDifferentLayout();
            }}>
              <ListIcon width={30} height={30}></ListIcon>
              
            </TouchableOpacity>
          )}
        </View>
        {showListFirst ? (
          <ScrollView style={{ marginBottom: 70 }}>
            {filterItems().map((item, index) => {
              return <Card item={item} index={index} key={index} />;
            })}
          </ScrollView>
        ) : (
          <View style={{ width: "100%", flexGrow: 1 }}>
            <Agenda
              selected={currentDate}
              items={events.reduce((acc, event) => {
                const { start_date, end_date, title, image } = event;
                const dateRange = getDatesInRange(
                  start_date.originalStartDate,
                  end_date.originalEndDate
                );
                dateRange.forEach((date) => {
                  const formattedDate = moment(date).format("YYYY-MM-DD");
                  if (!acc[formattedDate]) {
                    acc[formattedDate] = [];
                  }
                  acc[formattedDate].push({
                    name: title,
                    image: image,
                    start_date: start_date,
                    end_date: end_date,
                  });
                });
                return acc;
              }, {})}
              renderItem={(item, isFirst) => (
                <TouchableOpacity style={styles.item}>
                  <View style={styles.card}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.dateText}>
                      {item.start_date.originalStartDate} -{" "}
                      {item.end_date.originalEndDate}
                    </Text>
                    <Image source={{ uri: item.image }} style={styles.image} />
                  </View>
                </TouchableOpacity>
              )}
              showClosingKnob={true}
              renderEmptyData={() => {
                return (
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={{ textAlign: "center" }}>
                      Nincsenek események ezen a napon.
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Events;
