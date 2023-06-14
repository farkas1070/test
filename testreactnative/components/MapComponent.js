import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image,Dimensions} from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Mapstyle from "./Mapstyle";
import Carousel from "react-native-snap-carousel-v4";
import {useWindowDimensions} from 'react-native';
import { sights,vineyards } from "./Data";
import {styles} from "./Styles"

export default function MapComponent() {
  const mapRef = useRef(null);
  const carouselRef = useRef(null);
  const {width} = useWindowDimensions();
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(0);

  const [position, setPosition] = useState({
    latitude: 47.6828354,
    longitude: 16.5813035,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
 
 

  const handleMarkerPress = (index) => {
    setActiveMarkerIndex(index);
    carouselRef.current.snapToItem(index);
  };

  const handleResetLocation = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };
  function jumpToVineyards(){
    if (vineyards.length > 0 && mapRef.current) {
      const coordinates = vineyards.map(marker => ({
        latitude: marker.latitude,
        longitude: marker.longitude,
      }));
      
      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: false,
      });
    }
  }
  

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const foregroundSubscription = Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 10,
        },
        (location) => {
          let cor = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          };
          setPosition(cor)
        }
      );

      return () => {
        foregroundSubscription.remove();
      };
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={position}
        onMapReady={jumpToVineyards}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        customMapStyle={Mapstyle}
      >
        {vineyards.map((vineyard, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: vineyard.latitude,
                longitude: vineyard.longitude,
              }}
              resizeMode="contain"
              icon={
                activeMarkerIndex === index
                  ? require("./active_marker.png")
                  : require("./marker.png")
              }
              onPress={() => {
                handleMarkerPress(index);
              }}
            >
              <Callout>
                <Text>{vineyard.name}</Text>
              </Callout>
            </Marker>
          );
        })}
        {sights.map((sight, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: sight.latitude,
                longitude: sight.longitude,
              }}
              resizeMode="contain"
              icon={
                activeMarkerIndex === index
                  ? require("./active_marker.png")
                  : require("./yellowmarker.png")
              }
              onPress={() => {
                handleMarkerPress(index);
              }}
            >
              <Callout>
                <Text>{sight.name}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.carousel}>
        <TouchableOpacity style={styles.button} onPress={handleResetLocation}>
          <Text style={styles.buttonText}>
            <MaterialIcons name="my-location" size={28} color="#FFF" />
          </Text>
        </TouchableOpacity>
        <Carousel
          ref={carouselRef}
          layout="default"
          data={vineyards}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={styles.slide}>
                <View style={styles.slideContent}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{"description"}</Text>
                  </View>
                </View>
              </View>
            );
          }}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => {
            mapRef.current.animateToRegion({
              latitude: vineyards[index].latitude,
              longitude: vineyards[index].longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            });
            setActiveMarkerIndex(index);
          }}
        />
      </View>
    </View>
  );
}

