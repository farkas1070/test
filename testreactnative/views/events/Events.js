import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const Events = () => {
  const [selected, setSelected] = useState("");
  return (
    <View>
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
      <Text>{selected}</Text>
    </View>
  );
};

export default Events;
const styles = StyleSheet.create({});
