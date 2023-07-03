import { StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    mainconatiner:{
        backgroundColor:'rgba(0,0,0,0.5)',
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',alignItems:'center'
    },
    modalcontainer:{
        width:'60%',
        height:'50%',
        backgroundColor:'white',
        borderColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:30
    },
    closebutton:{
        backgroundColor:'grey',
        padding:10,
        borderRadius:10,
        marginBottom:20
    },
    text:{
        color:'grey',
        marginTop:30
    }

})