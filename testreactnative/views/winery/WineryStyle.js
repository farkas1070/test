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

  bottomPurpleContainer: {
    width: "100%",
    backgroundColor: "#352269",
  },
  serviceTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:30
  },
  servicesText:{
    color:'rgba(255, 255, 255, 0.40)',
    fontSize:26,
    letterSpacing:2
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
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: "white",
    marginRight: 20,
    paddingTop: 15,
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
  mainSocialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 25,

    marginRight: 20,
  },
  socialIconsContainer: {
    flexDirection: "row",
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

  websiteText: {
    color: "white",
  },
  bottomPurpleContainer: {
    width: "100%",
    backgroundColor: "#352269",
  },
  mainservicecontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 20, // Add horizontal padding
  },
  serviceWrapper: {
    width: "33.33%", // Three columns in a row (100% / 3 = 33.33%)
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    height: 170,
  },
  servicecontainer: {
    borderColor: "grey",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  servicetext: {
    // You may need to adjust the text styles to fit your needs
    color: "rgba(255, 255, 255, 0.90)",
    fontSize: 16,
    textAlign: "center",
  },
  takeToGoogleButton: {
    borderWidth: 1,
    borderRadius: 1000,
    padding: 10,
    borderColor: "#FF8882",
  },
});
