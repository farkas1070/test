import {
  View,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
  Modal,
} from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import * as Location from "expo-location";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Carousel from "react-native-snap-carousel-v4";
import { styles } from "./MapStyle";
import { WineriesContext } from "../../context/PointOfInterestContext.js";
import QRScanner from "./components/QRScanner";
import { tours } from "./Winetours";
import LoadingComponent from "./components/LoadingComponent";
import MapViewContainer from "./components/MapViewContainer";
import ToursModal from "./components/ToursModal"



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
  const [currentLatDelta, setCurrentLatDelta] = useState(0.1);
  const [currentLongDelta, setCurrentLongDelta] = useState(0.1);

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
        latitudeDelta: currentLatDelta,
        longitudeDelta: currentLongDelta,
      });
    }
  };
  const handleQRCodeScanned = (data) => {
    console.log("QR kód értéke:", data);
  };

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
            latitudeDelta: currentLatDelta,
            longitudeDelta: currentLongDelta,
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

  const handleCarouselSnap = (index) => {
    setActiveMarkerIndex(index);
    markerRef.current[index].showCallout();
    setTimeout(() => {
      mapRef.current.animateToRegion({
        latitude: filterMarkers(filter)[index].map.lat,
        longitude: filterMarkers(filter)[index].map.lng,
        latitudeDelta: currentLatDelta,
        longitudeDelta: currentLongDelta,
      });
    }, 100);
  };

  return (
    <View style={styles.container}>
      {pointsOfInterest.length == 0 ? (
        <LoadingComponent />
      ) : (
        <View style={styles.container}>
           <ToursModal modalVisible={modalVisible} closeModal={closeModal} tours={tours} setTourFilter={setTourFilter} showTours={showtours} setShowTours={setShowTours}/>
         
          <MapViewContainer
            mapRef={mapRef}
            markerRef={markerRef}
            jumpToPointOfInterest={jumpToPointOfInterest}
            showtours={showtours}
            filterTours={filterTours}
            tourfilter={tourfilter}
            filterMarkers={filterMarkers}
            filter={filter}
            handleCarouselSnap={handleCarouselSnap}
            handleMarkerPress={handleMarkerPress}
            setCurrentLatDelta={setCurrentLatDelta}
            setCurrentLongDelta={setCurrentLongDelta}
          />

         

          

          <View style={styles.filterButtonContainer}>
            <TouchableOpacity
              style={
                filter === "vineyard"
                  ? styles.filterButtonActive
                  : styles.filterButton
              }
              onPress={() => {
                filter !== "vineyard"
                  ? setFilter("vineyard")
                  : setFilter("all");
              }}
            >
              <Text style={styles.buttonText}>
                <MaterialIcons name="wine-bar" size={28} color="#FFF" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                filter === "sight"
                  ? styles.filterButtonActive
                  : styles.filterButton
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
            <TouchableOpacity
              style={styles.button}
              onPress={handleResetLocation}
            >
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
                handleCarouselSnap(index);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Map;
