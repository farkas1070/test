import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalButton: {
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
    top: 50,
    right: 30,
    position: "absolute",
  },
  modalContent: {
    width: "100%",
    height: "80%",
    padding: 10,
    alignItems: "center",
  },
  borturatext: {
    color: "black",
    fontSize: 25,
    marginBottom: 20,
  },
  modalbutton: {
    width: "80%",
  },
  tourcard: {
    width: "100%",
    height: 90,
    backgroundColor: "rgba(239, 239, 239, 1)",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tourimage: {
    width: 80,
    height: 80,
    marginLeft: 15,
    borderRadius: 10,
  },
  tourtext: {
    marginLeft: 20,
  },
  tourContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 10,
  },
});
