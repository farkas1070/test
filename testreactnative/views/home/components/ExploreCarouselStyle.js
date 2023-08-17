import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 350,
    width: "100%",
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
    fontSize:34,
    
  },
  textContainer:{
    position:'absolute',
    bottom:140
  },
  background:{
    width:'100%',
    height:'100%',
    
  }
});
