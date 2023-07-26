import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 75,
    left: 10,
    zIndex: 1,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  eventInfo: {
    padding: 10,
    flexDirection: "row",
  },
  eventStartDate: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  eventEndDate: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  eventStartHour: {
    marginHorizontal: 10,
  },
  eventEndHour: {
    marginHorizontal: 10,
  },
  backContainer: {
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  eventDatails: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  eventDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  eventDetailsTitle: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  eventDetailsText: {
    marginHorizontal: 15,
  },
});
