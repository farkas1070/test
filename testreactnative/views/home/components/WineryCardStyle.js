import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    backgroundColor: "white",
    width: 120,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    
    borderRadius: 10,
  },
  imageContainer:{
    width:'100%',
    height:110,
    
    alignItems:'center',
    justifyContent:'flex-end'
    
  },
  carouselImage: {
    width: "90%",
    height: "95%",
    
    borderRadius: 10,
  },
  titleText:{
    fontSize:17,
    color:'black'
  },
  textContainer:{
    width:'100%',
    padding:5
  },
});
