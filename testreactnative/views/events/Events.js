import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./EventsStyle";
import { getEsemények } from "../../controllers/PointOfInterestController";
import { CalendarList } from "react-native-calendars";
import Placeholder from "../../assets/placeholder.png";

const Events = () => {
  const [selected, setSelected] = useState("");
  const [showListFirst, setShowListFirst] = useState(true);
  const [currentDate, setCurrentDate] = useState("");
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await getEsemények();

      const extractedData = response.events.map((item) => {
        return {
          start_date: item.start_date,
          end_date: item.end_date,
          title: item.title,
          image: item?.image?.sizes?.medium?.url,
        };
      });
      setEvents(extractedData);
      console.log(extractedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    setCurrentDate(`${year}-${month}-${day}`);
  }, []);

  function showDifferentLayout() {
    setShowListFirst(!showListFirst);
  }

  const filterItems = () => {
    return events.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <View style={styles.maincontainer}>
      <View style={{ paddingRight: 10, flexDirection: "row" }}>
        <TouchableOpacity>
          <Ionicons
            name="calendar"
            size={30}
            color="black"
            style={{ marginRight: 20, marginTop: 20 }}
            onPress={() => {
              showDifferentLayout();
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="list"
            size={30}
            color="black"
            style={{ marginTop: 20 }}
            onPress={() => {
              showDifferentLayout();
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.textinput}
          placeholder="Keresés"
          placeholderTextColor="#000"
          value={searchText}
          onChangeText={(value) => setSearchText(value)}
        />
      </View>
      {showListFirst ? (
        <ScrollView>
          {filterItems().map((item, index) => {
            return (
              <View key={index} style={styles.singlenews}>
                <Image
                  style={styles.image}
                  source={item.image ? { uri: item.image } : Placeholder}
                />
                <View style={styles.innerview}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          initialDate={currentDate}
          markedDates={{
            "2023-06-11": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
            "2023-06-10": { marked: true },
            "2023-06-12": {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
          }}
        />
      )}

      <Text>{selected}</Text>
    </View>
  );
};

export default Events;
