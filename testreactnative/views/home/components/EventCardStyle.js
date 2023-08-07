import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  slide: {
    width: "100%", // Set the slide width to 100%
    height: 150, // Replace with your desired slide height
    backgroundColor: "#FFF",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    flexDirection: "row",
  },
  imageContainer: {
    width: "40%",
  },
  title: {
    fontSize: 20,

    color: "#342767",
    marginLeft: 10,
    marginTop: 10,
  },
  dateText: {
    fontSize: 12,
    color: "#FF8882",
    marginLeft: 10,
    marginTop: 10,
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8
  },
  eventNameView: {
    width: "60%",
    height: "100%",
    marginTop: 12,
    justifyContent: "space-between",
  },
  innerContainer:{
    width:'100%'
  },
  locationContainer: {
    width: "100%",
    flexDirection: "row",
    marginLeft: 8,
    alignItems: "center",
    marginBottom: 30,
  },
  locationText: {
    color: "rgba(52, 39, 103, 0.50)",
    marginLeft: 5,
  },
});
