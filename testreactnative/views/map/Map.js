import {
  TouchableOpacity,
  Text,
  View,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useRef, useContext, useMemo } from "react";
import * as Location from "expo-location";
import { styles } from "./MapStyle";
import { WineriesContext } from "../../context/GlobalContext.js";
import { tours } from "./Winetours";
import LoadingComponent from "./components/LoadingComponent";
import MapViewContainer from "./components/MapViewContainer";
import MapCarousel from "./components/MapCarousel";
import ToursModal from "./components/ToursModal";
import CurrentWineTour from "./components/CurrentWineTour";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import ListIcon from "../../assets/mapassets/listIcon.svg";
import FilterIcon from "../../assets/mapassets/filterIcon.svg";
import ToursIcon from "../../assets/mapassets/toursIcon.svg";
import LocationIcon from "../../assets/mapassets/Location.svg";
import CloseIcon from "../../assets/mapassets/Close.svg";
import CarouselCloseIcon from "../../assets/mapassets/CarouselClose.svg";
import { FontsContext } from "../../context/GlobalContext.js";
import FilterCarousel from "./components/FilterCarousel";
const Map = ({ setShowMap, search }) => {
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
  const [currentLatDelta, setCurrentLatDelta] = useState(0.5);
  const [currentLongDelta, setCurrentLongDelta] = useState(0.5);
  const [showCurrentWineTour, setShowCurrentWineTour] = useState(false);
  const bottomSheetRef = useRef(null);
  const bottomSheetFilterRef = useRef(null);
  const bottomSheetToursRef = useRef(null);
  const snapPoints = useMemo(() => ["1%", "28%"], []);
  const toursSnapPoints = useMemo(() => ["50%", "75", "100%"], []);
  const filterSnapPoints = useMemo(() => ["50%"], []);
  const fontsLoaded = useContext(FontsContext);
  const [position, setPosition] = useState({
    latitude: 47.6828354,
    longitude: 16.5813035,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  if (currentLatDelta > 0.01) setCurrentLatDelta(0.005);
  if (currentLongDelta > 0.01) setCurrentLongDelta(0.005);

  const [filteredMarkers, setFilteredMarkers] = useState([]);

  useEffect(() => {
    const filteredItems = search();
    setFilteredMarkers(filteredItems);
  }, [search]);

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
      return filteredMarkers.filter(
        (poi) => poi.type === "sight" && poi.map.lat !== undefined
      );
    } else if (type === "wineries") {
      return filteredMarkers.filter(
        (poi) => poi.type === "wineries" && poi.map.lat !== undefined
      );
    } else {
      return filteredMarkers.filter((point) => point.map.lat !== undefined);
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

      // Hozzáadunk egy kis késleltetést az iOS-en
      const delay = Platform.OS === "ios" ? 1 : 0;

      setTimeout(() => {
        mapRef.current.fitToCoordinates(coordinates, {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        });
      }, delay);
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
    bottomSheetFilterRef.current.present();
  };
  const closeBottomSheet = () => {
    bottomSheetRef.current.close()
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ToursModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        tours={currentTour ? [currentTour] : tours}
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
            activeMarkerIndex={activeMarkerIndex}
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
            <MaterialIcons name="my-location" size={28} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toursButton}
            onPress={() => {
              bottomSheetToursRef.current.present();
            }}
          >
            <ToursIcon width={24} height={24} />
          </TouchableOpacity>
          <View style={{ position: "absolute", width: "100%", top: 0 }}>
            <FilterCarousel />
          </View>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={handleBottomSheetFilter}
          >
            <FilterIcon width={24} height={24} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.listChangeButton}
            onPress={handleShowMap}
            
          >
            <Text style={[styles.buttonText, { fontFamily: "HKGrotesk" }]}>
              Lista
            </Text>
            <ListIcon width={24} height={24}></ListIcon>
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
              height:0
              
            }}
            handleStyle={{
              height:0,
              padding:0
            }}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
          >
            

            <MapCarousel
              data={filteredMarkers}
              activeMarkerIndex={activeMarkerIndex}
              handleMarkerPress={handleMarkerPress}
              carouselRef={carouselRef}
              handleCarouselSnap={handleCarouselSnap}
              width={width}
              onBottomSheetClose={closeBottomSheet}
            />
          </BottomSheet>
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetFilterRef}
              index={0}
              snapPoints={filterSnapPoints}
              style={styles.bottomSheet}
              handleIndicatorStyle={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <View style={styles.bottomSheetFilterHeader}>
                <Text style={styles.title}>Show on map</Text>
                <TouchableOpacity
                  style={styles.bottomSheetFilterClose}
                  onPress={() => bottomSheetFilterRef.current.close()}
                >
                  <CloseIcon width={24} height={24} />
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
                <Text style={{ color: "#FF8882" }}>Clear all</Text>
                <TouchableOpacity style={styles.bottomSheetSelectButton}>
                  <Text style={{ color: "white" }}>Show selected</Text>
                </TouchableOpacity>
              </View>
            </BottomSheetModal>
          </BottomSheetModalProvider>
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetToursRef}
              index={0}
              snapPoints={toursSnapPoints}
              backgroundStyle={{
                backgroundColor: "#FFBD54",
              }}
              handleIndicatorStyle={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            >
              <View style={styles.bottomSheetFilterHeader}>
                <Text
                  style={{
                    color: "white",
                    marginLeft: 10,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Wine tours
                </Text>

                <TouchableOpacity
                  onPress={() => bottomSheetToursRef.current.dismiss()}
                  style={styles.closeButton}
                >
                  <CloseIcon width={24} height={24} />
                </TouchableOpacity>
              </View>
              <View style={styles.bottomSheetFilterBody}>
                {tours.map((tour, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.bottomSheetTourButton}
                      onPress={() => {
                        setCurrentTour(tour);
                        modalVisible ? closeModal() : openModal();
                        bottomSheetToursRef.current.dismiss();
                      }}
                    >
                      <ImageBackground
                        source={{ uri: tour.mappin }}
                        style={styles.tourImage}
                        imageStyle={{ borderRadius: 10 }}
                      ></ImageBackground>
                      <View style={styles.hashtagContainer}>
                        <Text style={styles.hashtagText}>#</Text>
                      </View>

                      <View style={styles.kmContainer}>
                        <View style={styles.circle}></View>
                        <Text style={styles.hashtag}>#</Text>
                        <Text style={styles.kmText}>{tour.length}</Text>
                      </View>
                      <View style={styles.stopContainer}>
                        <LocationIcon width={24} height={24} />
                        <Text style={styles.hashtag}>#</Text>
                        <Text style={styles.stopText}>{tour.stops}</Text>
                      </View>
                      <View style={styles.nameContainer}>
                        <Text style={styles.tourNameText}>{tour.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </View>
      )}
    </View>
  );
};

export default Map;
