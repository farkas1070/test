import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "beige",
    width: "100%",
    height: "100%",
    padding: 20,
  },

  card: {
    width: "100%",
    height: 150,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
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
