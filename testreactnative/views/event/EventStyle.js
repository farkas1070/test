import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 75,
    left: 10,
    zIndex: 1,
  },
  eventTitle: {
    fontSize: 26,
    color:'#352269',
    marginLeft: 16,
    marginBottom: 10,
    marginTop: 24,
  },
  eventLocation:{
    
    flexDirection:'row',
    alignItems: 'flex-start',
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#C4C4C4',
    paddingBottom:20,
    marginLeft:20,
    marginRight:20
  },
  eventInfo: {
    padding: 16,
    flexDirection: "row",
  },
  eventStartDate: {
    fontSize: 20,
    
    color:'#352269',
    marginHorizontal: 10,
  },
  eventEndDate: {
    fontSize: 20,
    color:'#352269',
    
    marginHorizontal: 10,
  },
  eventStartHour: {
    marginHorizontal: 10,
    color:'#352269',
  },
  addText:{
    
      marginHorizontal: 15,
      marginVertical: 10,
      color:'#FF8882'
    
  },
  startText:{
    color:'#9D97B7',
    
    fontSize:14,
    marginHorizontal: 10,
  },
  endText:{
    color:'#9D97B7',
    marginTop:7,
    fontSize:14,
    marginHorizontal: 10,
  },
  eventEndHour: {
    marginHorizontal: 10,
    color:'#352269',
  },
  backContainer: {
    backgroundColor: "#F0EEEF",
    marginVertical: 10,
  },
  eventDatails: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  eventDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  eventDetails:{

  },
  
  eventDetailsTitle: {
    fontSize:17,
    color:'#352269',
    marginLeft:15
    
  },
  eventDetails:{
    marginLeft:20,
    color:'#9D97B7'
  },
  eventDetailsText: {
    marginHorizontal: 20,
    color:'#696969'
  },
});
