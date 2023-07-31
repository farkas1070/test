import { Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './TopHeaderStyle'
import { Ionicons } from "@expo/vector-icons";
import BackIcon from "../../../assets/wineryassets/backIcon.svg"
import MapIcon from "../../../assets/wineryassets/mapIcon.svg"
import { useNavigation } from '@react-navigation/native';

const TopHeader = ({ item }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image}
      source={{uri:'https://images.adsttc.com/media/images/6193/c935/9a95/7a66/5a21/b557/large_jpg/2698-fp776581.jpg?1637075269'}} 
      
      />
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <BackIcon width={40} height={40}></BackIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewOnMap}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <MapIcon width={30} height={30} style={styles.mapIcon}></MapIcon>
        <Text style={styles.viewOnMapText}>View on Map</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TopHeader

