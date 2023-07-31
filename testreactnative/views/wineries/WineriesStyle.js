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
    backgroundColor: "#FF8882",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "25%",
    shadowColor: "#FF8882", // Use the same purple color for the shadow
    shadowOffset: {
      width: 2,
      height: 4, // Adjust the vertical offset to make the shadow more prominent at the bottom
    },
    shadowOpacity: 1, // Increase the opacity to make the shadow darker
    shadowRadius: 15, // Increase the radius to make the shadow spread wider
    elevation: 8,
  },
  mapButtonText: {
    marginRight: 10,
    color: "white",
  },
});
