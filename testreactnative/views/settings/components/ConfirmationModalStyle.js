import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor:'rgba(0,0,0,0.5)'
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent:'space-between',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        width:'70%',
        height:'50%',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      denybutton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      confirmationbutton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      buttonOpen: {
        backgroundColor: '#2196F3',
      },
      buttonClose: {
        backgroundColor: 'grey',
      },
      buttonscontainer:{
        flexDirection:'row',
        justifyContent:'center',
        
                
      }
})