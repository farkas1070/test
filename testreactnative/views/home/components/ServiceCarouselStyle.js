import { StyleSheet } from 'react-native'




export const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 30,
      },
      serviceContainer: {
        width: 100,
       
       alignItems: 'center',
        
        
        marginLeft:30
      },
      imageContainer: {
        borderWidth:1,
        borderColor:'#352269',
        borderRadius:200,
        justifyContent: 'center',
        alignItems:'center'
      },
      container: {
        flex: 1,
        paddingTop: 20,
        
      },
      servicetext:{
        fontWeight:'bold',
        marginTop:10,
        textAlign:'center'
      }
})