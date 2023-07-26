import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#ffff",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    

  },
  newsTextContainer:{
    width:'100%',
    backgroundColor:'#FAFAFA',
    
  },
  containercontent:{
    alignItems:'center',
  },
  toptext:{
    fontSize:25,
    fontWeight: "bold",
    marginLeft:20,
    marginTop:20,
    marginBottom:10
  },

  card: {
    width: "100%",
    height: 150,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  textinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
  },
});
