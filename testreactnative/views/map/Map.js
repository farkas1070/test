import {
  TouchableOpacity,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useMemo,
  useCallback,
} from "react";
import * as Location from "expo-location";
import { styles } from "./MapStyle";
import { WineriesContext } from "../../context/GlobalContext.js";
import { tours } from "./Winetours";
import LoadingComponent from "./components/LoadingComponent";
import MapViewContainer from "./components/MapViewContainer";
import MapCarousel from "./components/MapCarousel";
import ToursModal from "./components/ToursModal";
import FilterButtons from "./components/FilterButtons";
import CurrentWineTour from "./components/CurrentWineTour";
import { Ionicons } from "@expo/vector-icons";
import FilterCarousel from "./components/FilterCarousel";

const Map = ({ setShowMap }) => {
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
  const bottomSheetRef = useRef(null);
  const bottomSheetFilterRef = useRef(null);
  const snapPoints = useMemo(() => ["1%", "50%"], []);

  const [position, setPosition] = useState({
    latitude: 47.6828354,
    longitude: 16.5813035,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  if (currentLatDelta > 0.01) setCurrentLatDelta(0.005);
  if (currentLongDelta > 0.01) setCurrentLongDelta(0.005);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleMarkerPress = (index) => {
    setActiveMarkerIndex(index);
    carouselRef.current.snapToItem(index);
    bottomSheetRef.current.expand();
  };

  const handleMapPress = () => {
    bottomSheetRef.current.close();
  };

  const handleResetLocation = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
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
  const filteredMarkers = filterMarkers(filter);

  const filterTours = (name) => {
    if (name === "None") {
      return tours;
    } else {
      return tours.filter((tour) => tour.name === name);
    }
  };

  useEffect(() => {
    const getLocationPermissions = async () => {
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
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          };
          setPosition(cor);
        }
      );

      return () => {
        foregroundSubscription.remove();
      };
    };

    getLocationPermissions();
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
    console.log(markerRef.current[index].props.marker);
    setTimeout(() => {
      mapRef.current.animateToRegion({
        latitude: filterMarkers(filter)[index].map.lat,
        longitude: filterMarkers(filter)[index].map.lng,
        latitudeDelta: currentLatDelta,
        longitudeDelta: currentLongDelta,
      });
    }, 100);
  };
  const handleShowTour = (tour) => {
    setShowCurrentWineTour(true);
    setTourFilter(tour.name);
    closeModal();
    if (!showtours) {
      setShowTours(true);
    }
  };

  const handleShowMap = () => {
    setShowMap(false);
  };

  const handleBottomSheetFilter = () => {
    bottomSheetFilterRef.current.expand();
  };

  return (
    <View style={styles.container}>
      <ToursModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        tours={tours}
        handleshowTour={handleShowTour}
      />

      {pointsOfInterest.length === 0 ? (
        <LoadingComponent />
      ) : (
        <View style={styles.container}>
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
            handleMapPress={handleMapPress}
          />
          {/*
          <FilterButtons
            filter={filter}
            setFilter={setFilter}
            openModal={openModal}
            handleQRCodeScanned={handleQRCodeScanned}
          />
      */}

          {showCurrentWineTour && currentTour && (
            <CurrentWineTour
              currentTour={currentTour}
              setShowTours={setShowTours}
              setCurrentTour={setCurrentTour}
              jumpToPointOfInterest={jumpToPointOfInterest}
              setShowCurrentWineTour={setShowCurrentWineTour}
            />
          )}
          <TouchableOpacity
            style={styles.resetButton}
            onPress={handleResetLocation}
          >
            <MaterialIcons name="my-location" size={28} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toursButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <MaterialCommunityIcons
              name="transit-detour"
              size={28}
              color="#FFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={handleBottomSheetFilter}
          >
            <MaterialIcons name="filter-list" size={28} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleShowMap}>
            <Text style={styles.buttonText}>Lista</Text>
            <Ionicons name="list" size={30} color="black" />
          </TouchableOpacity>
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
            backgroundStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.0)",
            }}
            handleIndicatorStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
          >
            <View style={styles.bottomSheetHeader}>
              <TouchableOpacity
                style={styles.bottomSheetHeaderButton}
                onPress={() => bottomSheetRef.current.close()}
              >
                <Ionicons name="close" size={30} color="black" />
              </TouchableOpacity>
            </View>

            <MapCarousel
              data={filteredMarkers}
              activeMarkerIndex={activeMarkerIndex}
              handleMarkerPress={handleMarkerPress}
              carouselRef={carouselRef}
              handleCarouselSnap={handleCarouselSnap}
              width={width}
            />
          </BottomSheet>
          <BottomSheet
            ref={bottomSheetFilterRef}
            index={0}
            snapPoints={snapPoints}
            style={styles.bottomSheet}
            handleIndicatorStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
          >
            <View style={styles.bottomSheetFilterHeader}>
              <Text style={styles.title}>Show on map</Text>
              <TouchableOpacity>
                <Text>Clear all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomSheetFilterBody}>
              <TouchableOpacity style={styles.bottomSheetFilterButton}>
                <Text>Sightseeing</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomSheetFilterButton}>
                <Text>Others</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomSheetFooter}>
              <TouchableOpacity style={styles.bottomSheetFilterButton}>
                <Text>Show selected</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomSheetFilterClose}
                onPress={() => bottomSheetFilterRef.current.close()}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

export default Map;
