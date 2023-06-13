import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Marker, Callout } from "react-native-maps";
import Mapstyle from "./Mapstyle";
import Carousel from "react-native-snap-carousel-v4";

export default function MapComponent() {
  const mapRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(0);
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const vineyards = [
    {
      name: "Esterházy Vineyard",
      image:
        "https://www.hallwines.com/media/wysiwyg/hall/vineyards/Vineyard_BBS_1515_768px.jpg",
      latitude: 47.677493,
      longitude: 16.574725,
      id: 1,
    },
    {
      name: "Taschner Vineyard",
      image:
        "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmluZXlhcmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      latitude: 47.680965,
      longitude: 16.595614,
      id: 2,
    },
    {
      name: "Pfneiszl Vineyard",
      image:
        "https://www.hallwines.com/media/wysiwyg/hall/vineyards/Vineyard_BBS_1515_768px.jpg",
      latitude: 47.698976,
      longitude: 16.551085,
      id: 3,
    },
    {
      name: "Söptei Vineyard",
      image:
        "https://i.insider.com/615fd15a5ae4fe0018a708e6?width=1136&format=jpeg",
      latitude: 47.676683,
      longitude: 16.579596,
      id: 4,
    },
    {
      name: "Liszkay Vineyard",
      image:
        "https://images.squarespace-cdn.com/content/v1/58ae0e6c3e00be7a0f66a26b/1658164270174-VJ4NPBPNQ6WGRCIPVY15/IMG_20191101_140942142_HDR.jpg",
      latitude: 47.665987,
      longitude: 16.561179,
      id: 5,
    },
  ];

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
          setPosition(cor);
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
        showsUserLocation={true}
        region={position}
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
                  ? require("./active_marker.png") // Az aktív jelölő ikonjának útvonala
                  : require("./marker.png") // A többi jelölő ikonjának útvonala
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
          sliderWidth={400}
          itemWidth={400}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  carousel: {
    position: "absolute",
    height: "20%",
    bottom: 30,
    right: 15,
    left: 15,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  button: {
    position: "absolute",
    top: -75,
    right: 15,
    backgroundColor: "#007AFF",
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  slide: {
    justifyContent: "center",
  },
  slideContent: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  textContainer: {
    width: "65%",
    height: "100%",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "35%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
