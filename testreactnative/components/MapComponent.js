import React,{useState}from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapComponent() {

  const [initialRegionValue, setInitialRegionValue] = useState({
    latitude: 47.6803625,
    longitude: 16.5721739,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    
});

  return (
    <View style={styles.container}>
      <MapView 
      initialRegion={initialRegionValue}
      style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});