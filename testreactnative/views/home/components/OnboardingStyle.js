import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttoncontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  notenablebutton: {
    backgroundColor: "#EE4B2B",
    width: 120,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  enablebutton: {
    backgroundColor: "#3F704D",
    padding: 10,
    width: 120,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  requestpermissiontext: {
    textAlign: "center",
    color: "white",
  },
});
