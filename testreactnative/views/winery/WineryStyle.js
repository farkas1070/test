import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
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
    alignSelf: "center",
    marginBottom: 50,
  },
  mainservicecontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 10,
    columnGap: 10,
  },
  servicecontainer: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "grey",
    marginTop: 10,
    alignItems: "center",
    padding: 10,
  },
  topTextContainer: {
    width: "100%",
  },
  nameText: {
    fontSize: 20,
    color: "white",
    marginLeft: 20,
    marginTop: 60,
    letterSpacing: 1,
    fontSize: 26,
  },
  image: {
    width: 140,
    height: 140,
    position: "absolute",
    borderRadius: 100,
    top: -100,
    left: 20,
    zIndex: 1000,
  },
  infoContainer: {
    flexDirection: "row",
    
    marginLeft: 20,
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 10,
    marginRight:20
  },
  infoContainer2: {
    flexDirection: "row",
    width: "100%",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  webshopButton: {
    position: "absolute",
    top: -80,
    right: 20,
  },
  topContainer: {
    backgroundColor: "#352269",
    width: "100%",
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    marginRight: 20,
    height: 80,
    borderBottomColor: "white",
  },
  icon: {
    marginRight: 12,
    marginLeft: 10,
  },
  locationIcon: {
    marginLeft: 10,
  },
  adressContainer: {
    flexDirection: "column",
    marginLeft: 20,
  },
  mainAdressText: {
    color: "#FAFAFA",
    fontSize: 16,
  },
  subAdressText: {
    color: "rgba(250, 250, 250, 0.60)",
  },
  websiteContainer:{
    flexDirection: "row",
    
    marginLeft: 20,
    
    
    marginBottom: 30,
    marginRight:20
  },
  websiteText:{
    color:'white'
  }
});
