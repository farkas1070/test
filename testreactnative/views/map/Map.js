import { View, useWindowDimensions } from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import * as Location from "expo-location";
import { styles } from "./MapStyle";
import { WineriesContext } from "../../context/PointOfInterestContext.js";
import { tours } from "./Winetours";
import LoadingComponent from "./components/LoadingComponent";
import MapViewContainer from "./components/MapViewContainer";
import MapCarousel from "./components/MapCarousel";
import ToursModal from "./components/ToursModal";
import FilterButtons from "./components/FilterButtons";
import CurrentWineTour from "./components/CurrentWineTour";


const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef([]);
  const carouselRef = useRef(null);
  const { width } = useWindowDimensions();
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(0);
  const [pointsOfInterest, setpointsOfInterest] = useContext(WineriesContext);
  const [showtours, setShowTours] = useState(false);
  const [filter, setFilter] = useState("all");
  const [tourfilter, setTourFilter] = useState("None");
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTour, setCurrentTour] = useState(null);
  const [currentLatDelta, setCurrentLatDelta] = useState(0.1);
  const [currentLongDelta, setCurrentLongDelta] = useState(0.1);
  const [showCurrentWineTour, setShowCurrentWineTour] = useState(false);
 

  const [position, setPosition] = useState({
    latitude: 47.6828354,
    longitude: 16.5813035,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

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
          const coordinates = tour.sights.map((coordinate) => ({
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
  const handleshowTour = (tour) => {
    setShowCurrentWineTour(true);
    setTourFilter(tour.name);
    closeModal();
    if (!showtours) {
      setShowTours(true);
    }
  };

  return (
    <View style={styles.container}>
      {pointsOfInterest.length == 0 ? (
        <LoadingComponent />
      ) : (
        <View style={styles.container}>
          <ToursModal
            modalVisible={modalVisible}
            closeModal={closeModal}
            tours={tours}
            handleshowTour={handleshowTour}
          />
          

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

          <FilterButtons
            filter={filter}
            setFilter={setFilter}
            openModal={openModal}
            handleQRCodeScanned={handleQRCodeScanned}
          />

          {showCurrentWineTour && currentTour && (
            <CurrentWineTour
              currentTour={currentTour}
              setShowTours={setShowTours}
              setCurrentTour={setCurrentTour}
              jumpToPointOfInterest={jumpToPointOfInterest}
              setShowCurrentWineTour={setShowCurrentWineTour}

            />
          )}

          <MapCarousel
            data={filterMarkers(filter)}
            activeMarkerIndex={activeMarkerIndex}
            handleMarkerPress={handleMarkerPress}
            carouselRef={carouselRef}
            handleCarouselSnap={handleCarouselSnap}
            handleResetLocation={handleResetLocation}
            width={width}
          />
        </View>
      )}
    </View>
  );
};

export default Map;
