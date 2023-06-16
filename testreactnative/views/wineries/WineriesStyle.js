import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "beige",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
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
});
