import React, { useState, useEffect, useRef } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function MapComponent() {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
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
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
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
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        region={position}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetLocation}>
        <Text style={styles.buttonText}>
          <MaterialIcons name="my-location" size={38} color="#FFF" />
        </Text>
      </TouchableOpacity>
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
  button: {
    position: "absolute",
    bottom: 20,
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
