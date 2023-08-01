import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  carousel: {
    position: "relative",
    top: 0,
    width: "100%",
    backgroundColor: "#F7F7F7",
  },
  slide: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
    paddingTop:10,
    marginHorizontal: 30,
    
  },
  slideContent: {
    width: "100%",
    
  },
  selectedButton:{
    backgroundColor: "#352269",
    alignItems: "center",
    borderRadius: 35,
    height: 50,
    padding: 10,
    flexDirection: "row",
    
  },
  textContainer: {
    height: "100%",
  },
  text: {
    fontSize: 10,
    color:'#352269',
    textAlign: "center",
  },
  icon: {
    backgroundColor: "rgba(236,236,236,1)",
    alignItems: "center",
    borderRadius: 35,
    height: 50,
    padding: 10,
    flexDirection: "row",
    backgroundColor:'white'
  },
  container:{
    backgroundColor: "rgba(236,236,236,1)",
  }
});
