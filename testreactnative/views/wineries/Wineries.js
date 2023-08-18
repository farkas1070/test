import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { styles } from "./WineriesStyle";
import Card from "./components/Card";
import { WineriesContext } from "../../context/GlobalContext.js";
import Map from "../../views/map/Map.js";
import Header from "./components/Header";
import ListIcon from "../../assets/mapassets/mapIcon.svg";
import { FontsContext } from "../../context/GlobalContext.js";
import FilterCarousel from "../map/components/FilterCarousel";

const Wineries = ({ route }) => {
  const [wineries, setWineries] = useContext(WineriesContext);
  const [filteredWineries, setFilteredWineries] = useState([...wineries]);
  
  const filterWineriesProp = route.params?.filterWineries || false;
  const passedServiceProp = route.params?.service || false;
  console.log(typeof filterWineriesProp);
  const [searchText, setSearchText] = useState("");
  const [showMap, setShowMap] = useState(false);
  const fontsLoaded = useContext(FontsContext);
  const filterItems = () => {
    return wineries.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  if (!fontsLoaded) {
    return null;
  }

  useEffect(() => {
    const filterWineries = () => {
      const testFiltered = filteredWineries.filter((winery) => {
        if (winery.services && winery.services !== null) {
          return winery.services.some(
            (service) =>
              service.name.toLowerCase() === passedServiceProp.toLowerCase()
          );
        } else {
          return false;
        }
      });
      setWineries(testFiltered);
    };
    if (filterWineriesProp) {
      console.log(passedServiceProp);
      filterWineries();
    }
  }, [passedServiceProp]);

  return (
    <View style={styles.maincontainer}>
      <Header setSearchText={setSearchText} />
      {!showMap && <FilterCarousel />}
      {showMap ? (
        <Map setShowMap={setShowMap} search={filterItems} />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.maincontainer}>
            <ScrollView style={styles.scrollview}>
              {filterItems().map((item, index) => {
                return <Card item={item} index={index} key={index} />;
              })}
            </ScrollView>
            <TouchableOpacity
              style={styles.mapbutton}
              onPress={() => setShowMap(true)}
            >
              <Text style={[styles.mapButtonText, { fontFamily: "HKGrotesk" }]}>
                Map
              </Text>
              <ListIcon width={24} height={24}></ListIcon>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Wineries;
