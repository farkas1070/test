import { View,FlatList,Text } from 'react-native'
import React,{useContext} from 'react'
import {styles} from "./ServiceCarouselStyle"
import { ServicesContext } from '../../../context/GlobalContext';
import { SvgCssUri } from "react-native-svg";

const ExploreCarousel = () => {
  const [services, setServices] = useContext(ServicesContext)
  
  const renderItem = ({ item }) => {
    console.log(item.acf.icon)
    return (
      <View style={styles.serviceContainer}>
        <View style={styles.imageContainer}>
        <SvgCssUri uri={item.acf.icon_2} width={90} height={90} />
        </View>
        <Text style={styles.servicetext}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
  );
}

export default ExploreCarousel

