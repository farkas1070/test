import {  Text, View,useWindowDimensions,FlatList,Image } from 'react-native'
import React,{useContext} from 'react'
import {styles} from "./WineryCarouselStyle"
import { WineriesContext } from '../../../context/GlobalContext'
import WineryCard from './WineryCard'
const WineryCarousel = () => {
    const [wineries] = useContext(WineriesContext);
  

  const renderItem = ({ item }) => {
    return (
      <WineryCard item={item}/>
    );
  };

  return (
    <View style={styles.container}>
    <FlatList
        data={wineries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
  );
}

export default WineryCarousel

