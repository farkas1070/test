import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 350,
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
    bottom: 0,
    left:0,
    right: 0,
    
    
  },
  exploreText: {
    color: "white",
    marginLeft: 24,
    fontSize:38,
    
  },
  textContainer:{
    position:'absolute',
    bottom:120
  },
  background:{
    width:'100%',
    height:'100%'
  }
});
