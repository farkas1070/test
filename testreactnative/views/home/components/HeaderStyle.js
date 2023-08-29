import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height:100,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  safeAreaView:{
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    width: "100%",
  },
  topContainer:{
    flexDirection: "row",
    width:'100%',
    justifyContent: "center",
    marginTop:10,
    marginBottom:10,
    alignItems: "center",
  },
  searchbutton: {
    width:44,
    height:44,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
    marginRight: 10,
    backgroundColor:'#f5f5f5'
  },
  menuButton:{
    marginLeft:10,
    position:'absolute',
    left:0,
    top:5,
  }
});
