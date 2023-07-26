import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 260,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
  },
  imageContainer: {},
  backContainer: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.8)",
    width: 60,
    height: 60,
    borderRadius: 20,
    top: 25,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
