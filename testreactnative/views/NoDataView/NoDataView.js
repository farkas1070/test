import {  Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import {styles} from "./NoDataViewStyle"
import { getWineries,getNews,getEvents } from '../../controllers/WordpressProvider'
import { WineriesContext,EventsContext,NewsContext,LoadingContext } from '../../context/PointOfInterestContext'

const NoDataView = () => {
  const refreshData= async() => {
    console.log("refrsreshed data")
  }
  return (
    <View style={styles.maincontainer}>
      <Text>Hiba Történt az Adat beolvasása során, próbáld késöbb</Text>
      <Image
          style={styles.image}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1747/1747789.png' }}
        />
        <TouchableOpacity onPress={()=>{refreshData()}} style={styles.refreshbutton}>
          <Text>Frissités</Text>
        </TouchableOpacity>
    </View>
  )
}

export default NoDataView

