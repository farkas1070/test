import {  Text, View,ScrollView ,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import { getHírek } from "../../controllers/PointOfInterestController";
import { styles } from "./NewsStyle";
import Placeholder from "../../assets/placeholder.png"

const News = () => {
    const [News,setNews] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await getHírek();
    
          const extractedData = response.map((item) => {
            return {
              title: item.title.rendered,
              excerpt: item.excerpt.rendered,
              content: item.content.rendered,
              image: item._embedded['wp:featuredmedia']?.media_details?.sizes?.full?.source_url
            };
            
          });
          setNews(extractedData);
          console.log(extractedData);
        };
    
        fetchData();
      }, []);

  return (
    <ScrollView style={styles.maincontainer}>
      {News.map((item,index)=>{
        return(
            <View key={index} style={styles.card}>
                <View> 
                    <Image
                    style={styles.image}
                    source={item.image ? { uri: item.image } : Placeholder}
                    />
                </View>
                
                <Text numberOfLines={3} style={{lineHeight: 30,textAlign: 'center',}}>{item.title}</Text>
                
            </View>
        )
      })}
    </ScrollView>
  )
}

export default News

