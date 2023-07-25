import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    position: "relative",
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },

  scrollview: {
    width: "100%",
    padding: 20,
  },
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "90%",
    margin: 10,
  },
  mapbuttontext: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  mapbutton: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "25%",
  },
});
