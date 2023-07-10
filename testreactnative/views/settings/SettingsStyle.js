import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,

    backgroundColor: "#F5FCFF",
  },
  bodycontainer: {},
  languagecontainer: {
    width: "100%",
    borderTopColor: "grey",
    borderTopWidth: 1,
    backgroundColor: "#F5FCFF",
  },
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
  switchcontainer: {
    width: "100%",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderTopColor: "grey",
    borderTopWidth: 1,
    backgroundColor: "#F5FCFF",
  },
  switchButton: {
    width: "35%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "65%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  notificationText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
