import React from "react";
import { View, Image, Text } from "react-native";
import MapView, {
  Marker,
  Callout,
  Polyline,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import Placeholder from "../../../assets/placeholder.png";
import { Mapstyle } from "../CustomMapStyle";
import { styles } from "./MapViewContainerStyle";

const MapViewContainer = ({
  mapRef,
  markerRef,
  jumpToPointOfInterest,
  showtours,
  filterTours,
  tourfilter,
  filterMarkers,
  filter,
  handleCarouselSnap,
  handleMarkerPress,
  setCurrentLatDelta,
  setCurrentLongDelta,
}) => {
  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      showsUserLocation={true}
      provider={PROVIDER_GOOGLE}
      customMapStyle={Mapstyle}
      onMapReady={jumpToPointOfInterest}
      onRegionChangeComplete={async (region) => {
        setCurrentLatDelta(region.latitudeDelta);
        setCurrentLongDelta(region.longitudeDelta);
      }}
    >
      {showtours &&
        filterTours(tourfilter).map((tour, tourIndex) => (
          <>
            <Polyline
              key={`polyline-${tourIndex}`}
              coordinates={tour.coordinates.map((coordinate) => ({
                latitude: coordinate[1],
                longitude: coordinate[0],
              }))}
              strokeWidth={4}
            />
            {tour.coordinates.map((coordinate, markerIndex) => (
              <Marker
                key={`marker-${tourIndex}-${markerIndex}`}
                coordinate={{
                  latitude: coordinate[1],
                  longitude: coordinate[0],
                }}
                title={tour.name}
                description={tour.name}
              />
            ))}
          </>
        ))}
      {filterMarkers(filter).map((poi, index) => {
        return (
          <Marker
            id={index}
            ref={(ref) => (markerRef.current[index] = ref)}
            key={index}
            coordinate={{
              latitude: poi.map.lat,
              longitude: poi.map.lng,
            }}
            onPress={() => {
              handleCarouselSnap(index);
              handleMarkerPress(index);
            }}
            
          >
            <Image
              source={poi.logo ? { uri: poi.logo } : Placeholder}
              style={styles.markerimage}
            />
            
            <Callout style={styles.callout} tooltip={true}>
              <Text>{poi.title}</Text>
            </Callout>
          </Marker>
        );
      })}
    </MapView>
  );
};

export default MapViewContainer;
