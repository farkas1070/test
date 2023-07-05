import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,

    backgroundColor: "#F5FCFF",
  },
  bodycontainer: {},
  checkbox: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 20,
  },
  checkboxtext: {
    color: "#000",
  },
  savebutton: {
    padding: 10,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  savetext: {
    fontWeight: "bold",
  },
  languagetext: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
});
