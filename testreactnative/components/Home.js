import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from 'react-native-swiper';
const Home = () => {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <View style={{ flex: 1 }}>
        <Swiper style={styles.swiperContainer}>
          <View style={styles.slide}>
            <Text>Slide 1</Text>
          </View>
          <View style={styles.slide}>
            <Text>Slide 2</Text>
          </View>
          <View style={styles.slide}>
            <Text>Slide 3</Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
