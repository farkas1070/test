import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  carousel: {
    position: "relative",
    top: 0,
    width: "100%",
    borderColor: "gray",
    borderBottomWidth: 0.5,
  },
  slide: {
    justifyContent: "center",
    width: "100%",
    paddingBottom: 10,
    alignItems: "center",
  },
  slideContent: {
    width: "100%",
  },
  textContainer: {
    height: "100%",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    backgroundColor: "rgba(236,236,236,1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    width: 65,
    height: 65,
  },
});
