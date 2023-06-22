import {
  View,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
  Modal,
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
const Map = () => {
  const mapRef = useRef(null);
  const markerRef = useRef([]);
  const carouselRef = useRef(null);
  const { width } = useWindowDimensions();
  const [activeMarkerIndex, setActiveMarkerIndex] = useState(0);
  const [pointsOfInterest, setpointsOfInterest] = useContext(WineriesContext);
  const [position, setPosition] = useState({
    latitude: 47.6828354,
    longitude: 16.5813035,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [filter, setFilter] = useState("all");
  const [tourfilter, setTourFilter] = useState("None");
  const [modalVisible, setModalVisible] = useState(false);

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

  useEffect(() => {
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
    jumpToPointOfInterest();
  }, []);

  const data = {
    coordinates: [
      [16.594073961110723, 47.67724885870879],
      [16.590089646522387, 47.678480230719146],
      [16.58362329989555, 47.68056909891254],
      [16.58283950030446, 47.6794037406556],
      [16.584243807905153, 47.67832631080711],
      [16.58434178285438, 47.67740278179937],
      [16.590187621470562, 47.67344461518431],
      [16.591461295806937, 47.673136745196274],
      [16.591722562336543, 47.673268689699455],
      [16.592016487183372, 47.672916836950066],
      [16.592734970142203, 47.67208117716248],
      [16.59374737794684, 47.67190524708113],
      [16.5947597857525, 47.67236706227973],
      [16.5947597857525, 47.67300480035988],
      [16.594171936058956, 47.674280253138704],
      [16.594531177538897, 47.67663316180574],
      [16.594171936058956, 47.67724885870879],
    ],
  };

  return (
    <View style={styles.container}>
      <Modal statusBarTranslucent={true} visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <MaterialIcons name="close" size={28} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.modalContent}>
            {tours.map((tour)=>{
              return(
                <View style={styles.tourcard}>
                  <Image style={styles.tourimage} source={{ uri: tour.logo }} />
                  <Text style={styles.tourtext}>{tour.name}</Text>
                </View>
              )
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
      >
        {tours.map((tour, tourIndex) => (
        <>
          <Polyline
            key={`polyline-${tourIndex}`}
            coordinates={tour.coordinates.map(coordinate => ({
              latitude: coordinate[1],
              longitude: coordinate[0],
            }))}
            strokeWidth={4}
          />
          {tour.coordinates.map((coordinate, markerIndex) => (
            <Marker
              key={`marker-${tourIndex}-${markerIndex}`}
              coordinate={{ latitude: coordinate[1], longitude: coordinate[0] }}
              title={tour.name}
              description={tour.name}
            />
          ))}
        </>
      ))}

        
        
        {data.coordinates.map((coordinate, index) => {
          return (
            <Marker
              key={index}
              coordinate={{ latitude: coordinate[1], longitude: coordinate[0] }}
              title="Flatiron School Atlanta"
              description="This is where the magic happens!"
            />
          );
        })}
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
  );
};

export default Map;
