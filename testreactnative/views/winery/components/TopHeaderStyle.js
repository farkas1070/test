import { StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        
      },
      
      backContainer: {
        
        justifyContent: "center",
        alignItems: "center",
        marginLeft:20,
        marginTop:20,
      },
      buttonContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
      },
      viewOnMap:{
        marginTop:20,
        marginRight:5,
        flexDirection:'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius:10,
        padding:4

      },
      mapIcon:{
        marginRight:10,
        marginLeft:5
      },
      viewOnMapText:{
        color:'#FF8882',
        marginRight:5
      }
})