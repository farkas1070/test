import React, { useState } from "react";
import { Image, Text, View } from "react-native";

import MapView, {
  Marker,
  Callout,
  Polyline,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import Placeholder from "../../../assets/placeholder.png";
import { Mapstyle } from "../CustomMapStyle";
import { styles } from "./MapViewContainerStyle";
import BottomMarker from "../../../assets/markerbottom.png"
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
  const [mapReady, setMapReady] = useState(false);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      showsMyLocationButton={false}
      showsUserLocation={true}
      provider={PROVIDER_GOOGLE}
      customMapStyle={Mapstyle}
      onMapReady={() => {
        setTimeout(() => {
          setMapReady(true);
        }, 1000);
        jumpToPointOfInterest();
      }}
      onRegionChangeComplete={async (region) => {
        setCurrentLatDelta(region.latitudeDelta);
        setCurrentLongDelta(region.longitudeDelta);
      }}
    >
      {showtours &&
        filterTours(tourfilter).map((tour, index) => (
          <React.Fragment key={index}>
            <Polyline
              key={index}
              coordinates={tour.sights.map((coordinate) => ({
                latitude: coordinate[1],
                longitude: coordinate[0],
              }))}
              strokeWidth={4}
            />
          </React.Fragment>
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
            tracksViewChanges={!mapReady}

            //image={poi.logo ? { uri: poi.logo } : Placeholder} kell megoldás hogy lehessen az imaget módosítani
          >
            <View style={{ width: 50, height:60 }}>
              <Image
                source={poi.logo ? { uri: poi.logo } : Placeholder}
                style={styles.markerimage}
              />
             <Image
                source={BottomMarker}
                style={{bottom:0,width:50,position:'absolute',height:20,zIndex:-1}}
                resizeMode="contain"
              />
            </View>

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
