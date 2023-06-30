import React from "react";
import { Image, Text } from "react-native";
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
      showsMyLocationButton={false}
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
        filterTours(tourfilter).map((tour, index) => (
          <>
            <Polyline
              key={index}
              coordinates={tour.sights.map((coordinate) => ({
                latitude: coordinate[1],
                longitude: coordinate[0],
              }))}
              strokeWidth={4}
            />
            {tour.sights.map((coordinate, index) => (
              <Marker
                key={index}
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
            key={index}
            ref={(ref) => (markerRef.current[index] = ref)}
            
            coordinate={{
              latitude: poi.map.lat,
              longitude: poi.map.lng,
            }}
            onPress={() => {
              handleCarouselSnap(index);
              handleMarkerPress(index);
            }}
            tracksViewChanges={poi.logo ? false : true}
            

            //image={poi.logo ? { uri: poi.logo } : Placeholder} kell megoldás hogy lehessen az imaget módosítani

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
