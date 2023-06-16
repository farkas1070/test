import { Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./EventsStyle";
import { getHírek } from "../../controllers/PointOfInterestController";
const Events = () => {

  const [selected, setSelected] = useState("");
  const [showListFirst, setShowListFirst] = useState(true)

  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await getHírek();

      const extractedData = response.events.map((item) => {
        return {
          start_date: item.start_date,
          end_date: item.end_date,
          title: item.title,
          image: item?.image?.sizes?.medium?.url,
        };
      });
      setNews(extractedData);

    };

    fetchData();
  }, []);
  function showDifferentLayout() {
    setShowListFirst(!showListFirst);
  }

  return (
    <View style={styles.maincontainer}>
      <View style={{ paddingRight: 10, flexDirection: 'row' }}>
        <TouchableOpacity>
          <Ionicons name="calendar" size={30} color="black" style={{ marginRight: 20, marginTop: 20 }} onPress={() => { showDifferentLayout() }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="list" size={30} color="black" style={{ marginTop: 20 }} onPress={() => { showDifferentLayout() }} />
        </TouchableOpacity>
      </View>
      {
        showListFirst ?
          <View>
            {news.map((item,index) => {
              return (

                <Text key={index} >{item.title}</Text>
              )
            })}
          </View>

          :

          <Calendar
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              "2023-06-11": { selected: true, marked: true, selectedColor: "blue" },
              "2023-06-10": { marked: true },
              "2023-06-12": { selected: true, marked: true, selectedColor: "blue" },
            }}
          />
      }

      <Text>{selected}</Text>
    </View>
  );
};

export default Events;

