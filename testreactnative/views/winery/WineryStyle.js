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
  topTextContainer:{
    width:'100%',
    padding:5
  },
  nameText:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:10,
    marginTop:40
    
  },
  image:{
    width:100,
    height:100,
    position:'absolute',
    borderRadius:10,
    top:20,
    right:20
  },
  infoContainer:{
    flexDirection:'row',
    width:'100%',
    marginLeft:10,
    marginTop:10,
    marginBottom:10

  },
  infoContainer2:{
    flexDirection:'row',
    width:'100%',
    marginLeft:10,
    marginTop:10,
    marginBottom:10

  }
});
