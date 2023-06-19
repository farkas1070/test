import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Calendar, Agenda, LocaleConfig } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./EventsStyle";
import { getEsemények } from "../../controllers/PointOfInterestController";
import { CalendarList } from "react-native-calendars";
import Card from "./components/Card";
import moment from "moment";

const Events = () => {
  const [selected, setSelected] = useState("");
  const [showListFirst, setShowListFirst] = useState(true);
  
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

  

  function showDifferentLayout() {
    setShowListFirst(!showListFirst);
  }

  const filterItems = () => {
    return events.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const getEventDetails = (event) => {
    const formattedDate = moment(event.start_date).format("YYYY-MM-DD");
    if (formattedDate === selected) {
      return (
        <View>
          <Text>{event.title}</Text>
        </View>
      );
    }
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
            return <Card item={item} index={index} key={index} />;
          })}
        </ScrollView>
      ) : (

        

        <Agenda
        selected="2022-12-01"
        items={{
          '2022-12-01': [{name: 'Cycling'}, {name: 'Walking'}, {name: 'Running'}],
          '2022-12-02': [{name: 'Writing'}]
        }}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      )}
      
    </View>
  );
};

export default Events;
