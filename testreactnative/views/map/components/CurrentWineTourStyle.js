import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    maincontainer:{
        position: 'absolute',
        top:50,
        width:'100%',
        alignItems:'center'
    },

    container:{
        
        
        backgroundColor: 'white',
        width:'62%',
        borderRadius:10,
        justifyContent:'space-between',
        height:35,
        alignItems:'center',
        flexDirection: 'row',


    },
    cancelbutton:{
        borderRadius:30,
        backgroundColor:'white',
        elevation:5
    },
    buttonText:{
        fontSize: 14,
        marginLeft:5,
        fontWeight: 'bold',
    }

})