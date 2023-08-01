import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageContainer: {},
  backContainer: {
    position: "absolute",
    top: 40,
    left: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  viewOnMap: {
    position: "absolute",
    top: 40,
    right: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: 10,
    padding: 4,
  },
  mapIcon: {
    marginRight: 10,
    marginLeft: 5,
  },
  viewOnMapText: {
    color: "#FF8882",
    marginRight: 5,
  },
});
