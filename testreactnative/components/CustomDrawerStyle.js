import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 200,
    width: "90%",
  },
  drawerItem:{
    width:'100%',
    height:50,
    flexDirection:'row',
    justifyContent: "flex-start",
    alignItems:'center'
  },
  icon:{
    marginLeft:10
  },
  drawerItemText:{
    marginLeft:30
  }
});
