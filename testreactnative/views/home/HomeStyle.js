import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "beige",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.1,
    position: "absolute",
  },
});
