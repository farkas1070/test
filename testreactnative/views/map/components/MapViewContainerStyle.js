import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  carousel: {
    position: "absolute",
    height: "20%",
    bottom: 30,
    borderRadius: 20,
  },
  button: {
    position: "absolute",
    top: -75,
    right: 15,
    backgroundColor: "#007AFF",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  slide: {
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
  },
  slideContent: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  textContainer: {
    width: "65%",
    height: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "35%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  callout: {
    width: 125,
    height: 75,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  filterButtonContainer: {
    position: "absolute",
    top: 50,
    left: 15,
  },
  filterButton: {
    backgroundColor: "#007",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  filterButtonActive: {
    backgroundColor: "#007AFF",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  modalContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalButton:{
    backgroundColor: "rgba(239, 239, 239, 1)",
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
    top: 50,
    right: 30,
    position: "absolute",
  },
  modalContent:{
    
    width:'100%',
    height:'80%',
    padding:10,
    alignItems:'center',
  },
  tourcard:{
    width:'100%',
    height:90,
    backgroundColor: "rgba(239, 239, 239, 1)",
    marginTop:10,
    borderRadius:10,
    flexDirection:'row',

    justifyContent:'flex-start',
    alignItems:'center',


  },
  tourimage:{
    width:80,
    height:80,
    marginLeft:30,
    borderRadius:10,
  },
  tourtext:{
    marginLeft:20
  },
  modalbutton:{
    width:'80%'
  },
  borturatext:{
    color:'black',
    fontSize:25,
    marginBottom:20
  },
  markerimage: {
    width:40,
    height:40, 
    borderRadius:20,
    borderColor:'white',
    borderWidth:3,
    marginBottom:10,
    position:'relative'
  }
});
