import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  carousel: {
    height: "100%",
  },
  slide: {
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    margin: 10,
  },
  slideContent: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  descriptionText: {
    fontSize: 14,
    marginBottom:25,
    textAlign: "left",
    color:'#9D97B7'
  },
  text: {
    fontSize: 20,
    marginTop:15,
    color:'#352269',
    textAlign: "left",
  },
  image: {
    width: "90%",
    height: "90%",

    borderRadius: 200,
    resizeMode: "contain",
  },

  textContainer: {
    padding: 10,
    width: "55%",
    justifyContent: "space-between",
  },
  showButton: {
    color: "#FF8882",
    position:'absolute',
    right:-20,
    bottom:10,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 20,
  },
  showButtonText: {
    color: "#FF8882",
    fontWeight: "500",
    fontSize: 16,
    marginRight: 5,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: -5,
    borderRadius: 200,
    backgroundColor: "grey",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0eeef",
  },
});
