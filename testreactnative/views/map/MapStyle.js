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
  listChangeButton: {
    position: "absolute",
    bottom: 15,
    right: 150,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF8882",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#FF8882", // Use the same purple color for the shadow
    shadowOffset: {
      width: 0,
      height: 4, // Adjust the vertical offset to make the shadow more prominent at the bottom
    },
    shadowOpacity: 0.8, // Increase the opacity to make the shadow darker
    shadowRadius: 10, // Increase the radius to make the shadow spread wider
    elevation: 8, 
  },
  buttonText: {
    marginRight: 10,
    color:'white'
  },
  resetButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  toursButton: {
    position: "absolute",
    top: 75,
    right: 15,
    backgroundColor: "#FFBD54",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent:'center',
    alignItems: 'center',
  },
  filterButton: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "white",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
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

  callout: {
    width: 125,
    height: 75,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  markerimage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 3,
    marginBottom: 10,
    position: "relative",
  },
  bottomSheetHeaderButton: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  bottomSheetFooter: {
    flexDirection: "column",
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
  },
  bottomSheetFilterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomSheetFilterButton: {
    backgroundColor: "#EEEEEE",
    height: 120,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  bottomSheetFilterBody: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  hashtagContainer: {
    position: "absolute",
    width:45,
    height:45,
    padding:5,
    borderRadius: 60,
    backgroundColor: "#A8A8A8",
    top: 8,
    left: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dateContainer: {
    position: "absolute",
    flexDirection:'row',
    padding:5,
    
    backgroundColor: "white",
    borderRadius: 60,
    top: 8,
    left: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  kmContainer: {
    position: "absolute",
    flexDirection:'row',
    padding:5,
    
    backgroundColor: "white",
    borderTopStartRadius:60,
    borderBottomStartRadius:60,
    top: 8,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  stopContainer: {
    position: "absolute",
    flexDirection:'row',
    padding:5,
    
    backgroundColor: "white",
    borderTopStartRadius:60,
    borderBottomStartRadius:60,
    top: 54,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  hashtagText: {
    fontSize: 23,
    color:'white',

  },
  dateText: {
    fontSize: 15,
    color:'#A8A8A8',

  },
  kmText: {
    fontSize: 15,
    color:'#A8A8A8',

  },
  stopText: {
    fontSize: 15,
    color:'#A8A8A8',

  },
  circle:{
    height:20,
    marginLeft:5,
    marginRight:10,
    width:20,
    backgroundColor:'#A8A8A8',
    borderRadius:50
  },
  hashtag:{
    color:'#A8A8A8',
    marginRight:5
  },
  tourNameText:{
    fontSize:20,
    fontWeight:'bold',
    
  },
  nameContainer:{
    position:'absolute',
    bottom:15,
    left:15

}
});

