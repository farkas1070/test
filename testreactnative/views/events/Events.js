import {  Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./EventsStyle";
import { getHírek } from "../../controllers/PointOfInterestController";
const Events = () => {

  const [selected, setSelected] = useState("");
  const [showListFirst,setShowListFirst] = useState(true)
  const [news, setNews] = useState([])
  function showDifferentLayout(){
    console.log("mukodik")
  }

  return (
    <View style={styles.maincontainer}>
       <View style={{ paddingRight: 10,flexDirection:'row' }}>
              <Ionicons name="calendar" size={30} color="black" style={{ marginRight:20,marginTop:20}} onPress={()=>{showDifferentLayout()}} />
              <Ionicons name="list" size={30} color="black" style={{ marginTop:20}} onPress={()=>{showDifferentLayout()}} />
            </View>
      {
        showListFirst? <Text>listás nézet</Text>
        
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

