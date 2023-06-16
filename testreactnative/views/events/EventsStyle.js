import { StyleSheet} from "react-native";
export const styles = StyleSheet.create({
    maincontainer: {
      flex: 1,
      backgroundColor:'white',
      width:'100%',
      height:'100%',
    },
    singlenews:{
      
      height:200,
      backgroundColor:'beige',
      margin:10,
      borderRadius:20,
      elevation: 2,
      justifyContent:'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: "contain",
      position: "absolute",
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    },
    innerview:{
      backgroundColor:'rgba(255,255,255,0.7)',
      width:'50%',
      height:'30%',
      borderRadius:20,
      justifyContent: 'center',
      alignItems:'center',
      padding:10
    },
    text:{
      textAlign: 'center',
    }
    
  });