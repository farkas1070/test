import { Text, View, Image} from 'react-native'
import React from 'react'
import {styles } from "./CardImageStyle"
import Placeholder from "../../../assets/placeholder.png"

const CardImage = ({item}) => {
  return (
    <View >
         <Image
          source={item ? { uri: item } : Placeholder}
          style={styles.image}
          
        />
        <View style={styles.readMoreTag}>
            <Text style={styles.readmoretext}>Read More</Text>
        </View>
    </View>
  )
}

export default CardImage

