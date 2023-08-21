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
import MapPin from "../../../assets/mapassets/MapPin.svg";
import PlaceholderImage from "../../../assets/homepageicons/placeholderImage.jpg";
import PressedMapPin from "../../../assets/mapassets/mapPinPressed.svg"
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
  handleMapPress,
  activeMarkerIndex
}) => {
  const [mapReady, setMapReady] = useState(false);
  
  return (
    <MapView
      ref={mapRef}
      initialRegion={{
        latitude: 46.5,
        longitude: 16.2,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={styles.map}
      showsMyLocationButton={false}
      showsUserLocation={true}
      toolbarEnabled={false}
      provider={PROVIDER_GOOGLE}
      customMapStyle={Mapstyle}
      onMapReady={() => {
        setMapReady(true);
        jumpToPointOfInterest();
      }}
      onPress={() => {
        handleMapPress();
        console.log("map pressed");
      }}
    >
      {showtours &&
        filterTours(tourfilter).map((tour, index) => (
          <Polyline
            key={index}
            coordinates={tour.sights.map((coordinate) => ({
              latitude: coordinate[1],
              longitude: coordinate[0],
            }))}
            strokeWidth={4}
          />
        ))}
      {filterMarkers.map((poi, index) => (
        <Marker
          key={ `${index}${Date.now()}` }
          ref={(ref) => (markerRef.current[index] = ref)}
          coordinate={{
            latitude: poi.map.lat,
            longitude: poi.map.lng,
          }}
          onPress={(e) => {
            e.stopPropagation();
            handleCarouselSnap(index);
            handleMarkerPress(index);
          }}
          tracksViewChanges={!mapReady}
        >
          
          <View style={styles.markerContainer}>
            <Image
              source={poi.logo ? { uri: poi.logo } : PlaceholderImage}
              resizeMode="cover"
              style={[styles.markerimage,{borderColor: activeMarkerIndex === index ? "#696969" : "#FF8882",}]}
            />
            {
              activeMarkerIndex === index ?
              <PressedMapPin
              width={20}
              height={20}
              style={{
                bottom: -3,

                position: "absolute",

                zIndex: -1,
              }}
            ></PressedMapPin>
            :
            <MapPin
              width={20}
              height={20}
              style={{
                bottom: -3,

                position: "absolute",

                zIndex: -1,
              }}
            ></MapPin>

            }
            
          </View>
          <Callout style={styles.callout} tooltip={true}>
            <Text>{poi.title}</Text>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

export default MapViewContainer;
