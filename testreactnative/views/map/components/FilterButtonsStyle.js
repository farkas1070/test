import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  filterButtonContainer: {
    position: "absolute",
    top: 70,
    left: 15,
  },
  filterButton: {
    backgroundColor: "#007",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  filterButtonActive: {
    backgroundColor: "#007AFF",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
