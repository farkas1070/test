import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 8,
    
  },
  imageContainer: {
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 5,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  phonetext: {
    marginBottom: 10,
    color: "#666",
  },
});
