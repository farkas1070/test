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
  handleScroll: {
    backgroundColor: "white",
    width: 200,
    height: 60,
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
    color: "#342767",
    fontSize: 20,
    marginLeft: 15,
  },
  cardContainer: {
    width: 160,
    height: 120,
    backgroundColor: "white",
    marginLeft:10,
    marginRight:10,
    borderRadius:10
  },
  icon:{
    marginLeft:20,
    marginTop:20
  }
});
