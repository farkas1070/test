import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Linking,
} from "react-native";
import React, { useContext } from "react";
import AddIcon from "../../assets/wineryassets/addIcon.svg";
import { styles } from "./EventStyle";
import TopHeaderImage from "../../components/TopHeaderImage";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontsContext } from "../../context/GlobalContext";
import CalendarIcon from "../../assets/wineryassets/calendarIcon.svg";
import LocationIcon from "../../assets/wineryassets/greyLocationIcon.svg";
const Event = ({ route }) => {
  const navigation = useNavigation();
  const startDate = new Date(route.params.item.start_date.originalStartDate);
  const endDate = new Date(route.params.item.end_date.originalEndDate);
  const fontsLoaded = useContext(FontsContext);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <ScrollView>
        <TopHeaderImage item={route.params.item.image} />
        <Text style={[styles.eventTitle, { fontFamily: "HKGroteskBold" }]}>
          {route.params.item.title}
        </Text>
        <View style={styles.backContainer}>
          <View style={styles.eventInfo}>
            <CalendarIcon widt={30} height={30}></CalendarIcon>
            <View>
              <Text style={[styles.startText, { fontFamily: "HKGrotesk" }]}>
                Start
              </Text>
              <Text
                style={[styles.eventStartDate, { fontFamily: "HKGroteskBold" }]}
              >
                {route.params.item.start_date.month} {route.params.item.start_date.day},{" "}{route.params.item.start_date.year}
              </Text>

              <Text style={styles.eventStartHour}>
                {startDate.toLocaleTimeString("hu-HU")}
              </Text>
              <Text style={[styles.endText, { fontFamily: "HKGrotesk" }]}>
                End
              </Text>
              <Text
                style={[styles.eventEndDate, { fontFamily: "HKGroteskBold" }]}
              >
                
                {route.params.item.end_date.month} {route.params.item.end_date.day},{" "}{route.params.item.end_date.year}
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
            <AddIcon width={20} height={20}></AddIcon>
            <Text style={[styles.addText, { fontFamily: "HKGrotesk" }]}>
              Add to calendar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventLocation}>
          <LocationIcon
            width={20}
            height={20}
            style={styles.locationIcon}
          ></LocationIcon>
          <View>
            <Text
              style={[
                styles.eventDetailsTitle,
                { fontFamily: "HKGroteskBold" },
              ]}
            >
              {route.params.item.location === undefined
                ? "Nincs Hely Megadva"
                : route.params.item.location}
            </Text>
          </View>
        </View>
        <View >
          <Text style={[styles.eventDetails,{fontFamily:'HKGrotesk'}]}>Details</Text>
          <Text style={styles.eventDetailsText}>
            {route.params.item.description}
          </Text>
        </View>

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
