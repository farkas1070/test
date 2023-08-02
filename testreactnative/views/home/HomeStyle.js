import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#F0EEEF",

    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },

  eventsection: {
    width: "100%",
    marginTop:60,

    flexDirection: "column",
  },
  eventtext: {
    fontSize: 22,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: "bold",
  },
  carouselcontainer: {
    marginTop: 20,
  },
  latestnewssection: {
    
    
    marginTop: 110,
    alignItems: "center",
    
    flexDirection:'column',
    
    
    marginLeft:10,
    marginRight:10
    
  },
  latestnewstext: {
    fontSize: 18,
    color:'#FF8882',
    marginBottom: 10,

    
  },
  latestContainer:{
    width:'100%',
    marginLeft:40
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'#D9D9D9',

  },
  seeMoreText:{
      color:'#FF8882',
  },
  
  shorttitletext: {
    fontSize: 24,
    
  },
  shortDateText: {
    fontSize: 18,
    color:'#A8A8A8',
    marginTop: 10,
  },
  
  exploreSection: {
    width: "100%",
  },
  exploreText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 22,
  },
  lookForWineriesSection: {
    width: "100%",
  },
  lookForWineriesText: {
    fontSize: 20,
    marginLeft: 20,

    fontSize: 22,
    marginTop: 30,
  },
  wineriesCarouselSection: {
    width: "100%",
    marginTop:40,
    backgroundColor:'#352269'
  },
});
