import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  carousel: {
    height: "100%",
  },
  slide: {
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
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
  closeButton: {
    position: "absolute",
    top: 5,
    right: -10,
    borderRadius: 200,
    backgroundColor: "grey",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0eeef",
  },
});
