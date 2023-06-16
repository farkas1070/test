import {  Text, View,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { getHírek } from "../../controllers/PointOfInterestController";
import { styles } from "./NewsStyle";

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
              
            };
          });
          setNews(extractedData);
          
        };
    
        fetchData();
      }, []);

  return (
    <ScrollView style={styles.maincontainer}>
      {News.map((item)=>{
        return(
            <View style={styles.card}><Text>{item.title}</Text></View>
        )
      })}
    </ScrollView>
  )
}

export default News

