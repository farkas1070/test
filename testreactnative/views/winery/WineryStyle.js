import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: "contain",
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
  },
  searchbar: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  opengooglemapsbutton: {
    flexDirection: "row",
    height: 40,
    alignSelf: "flex-start",
    padding: 10,
    backgroundColor: "#b3cee5",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  mainservicecontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  servicecontainer: {
    width: "90%",
    height: 80,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "grey",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servicetext: {
    marginRight: 10,
  },
});
