import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    height: 70,
    
    padding: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignSelf: "center",
    flexDirection: "row",
    borderBottomWidth:1,
    borderBottomColor:'#D9D9D9',
    backgroundColor:'#FFFFFF'
   
  },
  searchbarcontainer:{
    borderColor: "#A8A8A8",
    borderWidth: 1,
    flexDirection: 'row',
    borderColor:'#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:20,
    width: "85%",
  },
  searchButton:{
    
    borderRadius:10,
    padding:3
  },
  searchInput: {
    width:'80%',
    height: 40,
    backgroundColor: "white",
    
    borderRadius: 20,
    padding: 10,
  },
});
