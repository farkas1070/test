import { StyleSheet} from 'react-native'




export const styles = StyleSheet.create({
    tourimage:{
        width:'100%',
        height:'100%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:70
    },
    imagecontainer:{
        width:'100%',
        height:260
    },
    maininfocontainer:{
        position:'absolute',
        bottom:10,
        marginLeft:5
    },
    infocontainer:{
        backgroundColor:'white',
        borderRadius:10,
        flexDirection:'row',
        padding:5,
    },
    nametext:{
        color:'white',
        marginBottom:20,
        fontSize:18,
        fontWeight:'bold',
    },
    smallinfocontainer:{
        flexDirection:'row',
        marginLeft:10,
        justifyContent:'center',
        alignItems: 'center',
        marginRight:5,
    },
    infotext:{
        color:'black',
        marginLeft:2
    },
    upperbuttonscontainer:{
        position:'absolute',
        marginLeft:20,
        
        top:50,

    },
    backbutton:{
        backgroundColor:'rgba(255,255,255,0.7)',
        padding:10,
        borderRadius:100,

    }
})