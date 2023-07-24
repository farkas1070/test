import { StyleSheet } from 'react-native'




export const styles = StyleSheet.create({
    slide: {
        width: '100%', // Set the slide width to 100%
        height: 250, // Replace with your desired slide height
        backgroundColor: '#FFF',
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#D9D9D9'
      },
      title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginLeft:20,
        marginTop:10
      },
      carouselImage:{
        width:'96%',
        height:'60%',
        marginTop:6,
        
      },
      eventNameView:{
        width:'100%',
        height:'100%',
        marginTop:12
        
      },
      datebox:{
        position:'absolute',
        top:-55,
        right:20,
        width:64,
        height:64,
        borderRadius:10,
        backgroundColor:'#D9D9D9'
      }
})