import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function MapComponent() {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
  });

  const [initialRegionValue, setInitialRegionValue] = useState({
    latitude: 47.6803625,
    longitude: 16.5721739,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      foregroundSubscrition = Location.watchPositionAsync(
        {
          // Tracking options
          accuracy: Location.Accuracy.High,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
          let cor = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          };
          setPosition(cor);
        }
      );
    })();
  }, []);

  const handleResetLocation = () => {
    setInitialRegionValue((prevState) => ({
      ...prevState,
      latitude: position.latitude,
      longitude: position.longitude,
    }));
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={initialRegionValue}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetLocation}>
        <Text style={styles.buttonText}>Vissza a helyzetemre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
