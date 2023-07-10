import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 40,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "70%",
    height: "25%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  denybutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "35%",
  },
  confirmationbutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "35%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
    marginRight: 10,
  },
  buttonClose: {
    backgroundColor: "grey",
    marginLeft: 10,
  },
  buttonscontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
