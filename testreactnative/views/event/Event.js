import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Linking,
} from "react-native";
import React from "react";
import Placeholder from "../../assets/placeholder.png";
import { styles } from "./EventStyle";
import TopHeaderImage from "../../components/TopHeaderImage";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Event = ({ route }) => {
  const navigation = useNavigation();
  const startDate = new Date(route.params.item.start_date.originalStartDate);
  const endDate = new Date(route.params.item.end_date.originalEndDate);
  return (
    <View>
      <ScrollView>
        <TopHeaderImage item={route.params.item.image} />
        <Text style={styles.eventTitle}>{route.params.item.title}</Text>
        <View style={styles.backContainer}>
          <View style={styles.eventInfo}>
            <Ionicons name="calendar" size={32} color="black" />
            <View>
              <Text style={styles.eventStartDate}>
                {startDate.toLocaleDateString("hu-HU")}
              </Text>

              <Text style={styles.eventStartHour}>
                {startDate.toLocaleTimeString("hu-HU")}
              </Text>
              <Text style={styles.eventEndDate}>
                {endDate.toLocaleDateString("hu-HU")}
              </Text>
              <Text style={styles.eventEndHour}>
                {endDate.toLocaleTimeString("hu-HU")}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="add-circle" size={28} color="black" />
            <Text
              style={{
                marginHorizontal: 15,
                marginVertical: 10,
              }}
            >
              Add to calendar
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            width: "90%",
            alignSelf: "center",
            backgroundColor: "black",
            marginVertical: 10,
          }}
        />
        <View style={styles.eventDetails}>
          <Text style={styles.eventDetailsTitle}>Details</Text>
          <Text style={styles.eventDetailsText}>
            {route.params.item.description}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            width: "90%",
            alignSelf: "center",
            backgroundColor: "black",
            marginVertical: 10,
          }}
        />
        <View style={styles.eventLocation}>
          <Text style={styles.eventDetailsTitle}>Location</Text>
          <Text style={styles.eventDetailsText}>
            {route.params.item.location}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            width: "90%",
            alignSelf: "center",
            backgroundColor: "black",
            marginVertical: 10,
          }}
        />
        <Text style={styles.eventDetailsTitle}>Website</Text>
        <Text
          style={styles.eventDetailsText}
          onPress={() => Linking.openURL(route.params.item.url)}
        >
          {route.params.item.url}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Event;
