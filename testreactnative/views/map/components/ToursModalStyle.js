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
    width: "35%",
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
  tourimage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 70,
  },
  imagecontainer: {
    width: "100%",
    height: 260,
  },
  maininfocontainer: {
    position: "absolute",
    bottom: 10,
    marginLeft: 5,
  },
  infocontainer: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
  },
  nametext: {
    color: "white",
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  smallinfocontainer: {
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  infotext: {
    color: "black",
    marginLeft: 2,
  },
  upperbuttonscontainer: {
    position: "absolute",
    marginLeft: 20,

    top: 50,
  },
  backbutton: {
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 10,
    borderRadius: 100,
  },
  descripioncontainer: {
    width: "100%",
    marginTop: 10,
    padding: 15,
  },
  descriptiontext: {
    color: "grey",
    textAlign: "left",
  },
  tourinfocontainer: {
    padding: 15,
  },
  startbuttoncontainer: {
    padding: 15,
  },
  startbutton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  starttext: {
    color: "white",
    marginLeft: 10,
  },
  bodycontainer: {
    width: "100%",
  },
  dscriptioncontainer: {
    width: "100%",
    padding: 20,
    marginTop: 10,
  },
  descriptiontext: {
    color: "gray",
  },
  starttourbutton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginTop: 10,
  },
});
