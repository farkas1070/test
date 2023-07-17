import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
});
