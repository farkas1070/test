import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  carousel: {
    height: "85%",
  },
  slide: {
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    margin: 10,
  },
  slideContent: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "left",
  },
  text: {
    fontSize: 16,

    fontWeight: "bold",
    textAlign: "left",
  },
  image: {
    width: "90%",
    height: "90%",

    borderRadius: 200,
    resizeMode: "contain",
  },

  textContainer: {
    padding: 10,
    width: "55%",
    justifyContent: "space-evenly",
  },
  showButton: {
    color: "#FF8882",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 20,
  },
  showButtonText: {
    color: "#FF8882",
    fontWeight: "500",
    fontSize: 16,
    marginRight: 5,
  },
});
