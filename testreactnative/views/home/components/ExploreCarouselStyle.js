import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 320,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(53, 34, 105, 0.4)",
  },
  carousel: {
    positon: "absolute",
    width: "100%",
    bottom: 0,
  },
  flatListContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: -60,
    left: 0,
    right: 0,
  },
  exploreText: {
    color: "white",
    marginLeft: 20,
    fontSize:32,
    
  },
  textContainer:{
    position:'absolute',
    bottom:80
  }
});
