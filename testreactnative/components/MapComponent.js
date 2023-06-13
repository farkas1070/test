import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Marker } from "react-native-maps";
import Swiper from 'react-native-swiper';
export default function MapComponent() {
  const vineyards = [
    {
      name: "Esterházy Vineyard",
      latitude: 47.677493,
      longitude: 16.574725,
      id: 1,
    },
    {
      name: "Taschner Vineyard",
      latitude: 47.680965,
      longitude: 16.595614,
      id: 2,
    },
    {
      name: "Pfneiszl Vineyard",
      latitude: 47.698976,
      longitude: 16.551085,
      id: 3,
    },
    {
      name: "Söptei Vineyard",
      latitude: 47.676683,
      longitude: 16.579596,
      id: 4,
    },
    {
      name: "Liszkay Vineyard",
      latitude: 47.665987,
      longitude: 16.561179,
      id: 5,
    },
  ];

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const mapRef = useRef(null);

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
          console.log(location);
          let cor = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          };
          setPosition(cor);
        }
      );

      return () => {
        foregroundSubscription.remove();
      };
    })();
  }, []);

  const handleResetLocation = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        showsPointsOfInterest={false}
        region={position}
        provider={PROVIDER_GOOGLE}
        customMapStyle={[
          {
            featureType: "administrative",
            elementType: "labels",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ]}
      >
        {vineyards.map((vineyard, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: vineyard.latitude,
                longitude: vineyard.longitude,
              }}
              title={vineyard.name}
              description={"description"}
              resizeMode="contain"
              style={{ width: 35, height: 35 }}
              icon={require("./marker.png")}
            ></Marker>
          );
        })}
      </MapView>
      <View style={styles.carousel}>
      <TouchableOpacity style={styles.button} onPress={handleResetLocation}>
        <Text style={styles.buttonText}>
          <MaterialIcons name="my-location" size={38} color="#FFF" />
        </Text>
      </TouchableOpacity>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  carousel: {
    position: "absolute",
    height:'25%',
    bottom: 15,
    right:15,
    left:15,
    borderRadius:10,
    backgroundColor:'white'
  },
  button: {
    position: "absolute",
    top: -100,
    
    right: 25,
    backgroundColor: "#007AFF",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
