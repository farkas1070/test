import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    maincontainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 100,
        height: 100,
        marginTop:100,
        resizeMode: "contain",
      },
      refreshbutton:{
        marginTop:100,
        backgroundColor:'cyan',
        borderRadius:10,
        padding:10
      }
})