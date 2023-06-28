import {
  View,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
  Modal,
  Platform,
  ActivityIndicator
} from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import MapView, {
  Marker,
  Callout,
  PROVIDER_GOOGLE,
  Polyline,
} from "react-native-maps";
import * as Location from "expo-location";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Carousel from "react-native-snap-carousel-v4";
import { styles } from "./MapStyle";
import { Mapstyle } from "./CustomMapStyle";
import VineyardImage from "../../assets/marker.png";
import SightImage from "../../assets/yellowmarker.png";
import ActiveMarker from "../../assets/active_marker.png";
import { WineriesContext } from "../../context/PointOfInterestContext.js";
import QRScanner from "./components/QRScanner";
import { tours } from "./Winetours";
import LoadingComponent from "./components/LoadingComponent";
const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef([]);
  const carouselRef = useRef(null);
  const { width } = useWindowDimensions();
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(0);
  const [pointsOfInterest, setpointsOfInterest] = useContext(WineriesContext);
  const [showtours, setShowTours] = useState(false);
  
  const [position, setPosition] = useState({
    latitude: 47.6828354,
    longitude: 16.5813035,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [filter, setFilter] = useState("all");
  const [tourfilter, setTourFilter] = useState("None");
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTour, setCurrentTour] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
  const handleQRCodeScanned = (data) => {
    console.log("QR kód értéke:", data);
  };

  function returnMarkerIcon(type) {
    switch (type) {
      case "sight":
        return SightImage;
      case "wineries":
        return VineyardImage;
    }
  }

  const filterMarkers = (type) => {
    if (type === "sight") {
      return pointsOfInterest.filter(
        (poi) => poi.type === "sight" && poi.map.lat !== undefined
      );
    } else if (type === "wineries") {
      return pointsOfInterest.filter(
        (poi) => poi.type === "wineries" && poi.map.lat !== undefined
      );
    } else {
      return pointsOfInterest.filter((point) => point.map.lat !== undefined);
    }
  };

  const filterTours = (name) => {
    if (name === "None") {
      return tours;
    } else {
      return tours.filter((tour) => tour.name === name);
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

  const jumpToPointOfInterest = () => {
    if (pointsOfInterest.length > 0 && mapRef.current) {
      const coordinates = pointsOfInterest
        .filter((poi) => poi.map.lat !== undefined)
        .map((marker) => ({
          latitude: marker.map.lat,
          longitude: marker.map.lng,
        }));

      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  };

  useEffect(() => {
    const jumpToCurrentTour = () => {
      if (tours.length > 0 && mapRef.current) {
        const tour = filterTours(tourfilter)[0]; // Az első túrát választjuk ki, módosítsd igény szerint
        if (tour) {
          setCurrentTour(tour);
          const coordinates = tour.coordinates.map((coordinate) => ({
            latitude: coordinate[1],
            longitude: coordinate[0],
          }));
  
          mapRef.current.fitToCoordinates(coordinates, {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
            animated: true,
          });
        }
      }
    };
  
    jumpToCurrentTour();
  }, [tourfilter]);

  return (
    <View style={styles.container}>
      {
        pointsOfInterest.length==0? <LoadingComponent /> : 
        <View style={styles.container}>
        <Modal
        statusBarTranslucent={true}
        visible={modalVisible}
        transparent
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <MaterialIcons name="close" size={28} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <Text style={styles.borturatext}>Bortúrák</Text>
            {tours.map((tour,index) => {
              return (
                <TouchableOpacity

                key={index}
                style={styles.modalbutton}

                  onPress={() => {
                    setTourFilter(tour.name);
                    closeModal();
                    if (!showtours) {
                      setShowTours(true);
                    }
                  }}
                >
                  <View style={styles.tourcard}>
                    <Image
                      style={styles.tourimage}
                      source={{ uri: tour.logo }}
                    />
                    <Text style={styles.tourtext}>{tour.name}</Text>
                  </View>
                  
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>

      <MapView
        ref={mapRef}
        style={styles.map}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        customMapStyle={Mapstyle}
        onMapReady={jumpToPointOfInterest}
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
              resizeMode="contain"
              icon={
                activeMarkerIndex === index
                  ? ActiveMarker
                  : returnMarkerIcon(poi.type)
              }
              onPress={() => {
                handleMarkerPress(index);
              }}
            >
              <Callout style={styles.callout}>
                <Text>{poi.title}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.filterButtonContainer}>
        <TouchableOpacity
          style={
            filter === "vineyard"
              ? styles.filterButtonActive
              : styles.filterButton
          }
          onPress={() => {
            filter !== "vineyard" ? setFilter("vineyard") : setFilter("all");
          }}
        >
          <Text style={styles.buttonText}>
            <MaterialIcons name="wine-bar" size={28} color="#FFF" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            filter === "sight" ? styles.filterButtonActive : styles.filterButton
          }
          onPress={() => {
            filter !== "sight" ? setFilter("sight") : setFilter("all");
          }}
        >
          <Text style={styles.buttonText}>
            <MaterialIcons name="wb-shade" size={28} color="#FFF" />
          </Text>
        </TouchableOpacity>
        <QRScanner onQRCodeScanned={handleQRCodeScanned} />
        <TouchableOpacity style={styles.filterButton} onPress={openModal}>
          <Text style={styles.buttonText}>
            <MaterialIcons name="search" size={28} color="#FFF" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carousel}>
        <TouchableOpacity style={styles.button} onPress={handleResetLocation}>
          <Text style={styles.buttonText}>
            <MaterialIcons name="my-location" size={28} color="#FFF" />
          </Text>
        </TouchableOpacity>
        <Carousel
          ref={carouselRef}
          layout="default"
          data={filterMarkers(filter).filter(
            (poi) => poi.map.lat !== undefined
          )}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={styles.slide}>
                <View style={styles.slideContent}>
                  <Image style={styles.image} source={{ uri: item.logo }} />
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.text}>{"description"}</Text>
                  </View>
                </View>
              </View>
            );
          }}
          sliderWidth={width}
          itemWidth={width}
          onSnapToItem={(index) => {
            setActiveMarkerIndex(index);
            markerRef.current[index].showCallout();
            mapRef.current.animateToRegion({
              latitude: filterMarkers(filter)[index].map.lat,
              longitude: filterMarkers(filter)[index].map.lng,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            });
          }}
        />
      </View>
      </View>
      }
      
    </View>
  );
};

export default Map;
