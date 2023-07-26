import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  slide: {
    width: "100%", // Set the slide width to 100%
    height: 100, // Replace with your desired slide height
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    width: 200,
    height: 150,
    marginLeft: 10,
  },

  container: {
    flex: 1,
    paddingTop: 20,
  },
  logo: {
    width: 50,
    height: 50,
    top: 10,
    left: 20,
    borderRadius: 10,
  },
  textView: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginLeft:15
  },
});
