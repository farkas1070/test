import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  
} from "react-native";
import React, { useState, useContext } from "react";
import { styles } from "./WineriesStyle";
import Card from "./components/Card";
import { WineriesContext } from "../../context/GlobalContext.js";
import Map from "../../views/map/Map.js";
import { Ionicons } from "@expo/vector-icons";
import Header from "./components/Header";
import ListIcon from "../../assets/mapassets/mapIcon.svg";
import HankenGrotesk from "../../fonts/HankenGrotesk-Regular.ttf";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
const Wineries = () => {
  const [wineries, setWineries] = useContext(WineriesContext);
  const [searchText, setSearchText] = useState("");
  const [showMap, setShowMap] = useState(false);

  const filterItems = () => {
    return wineries.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  const [loaded] = useFonts({
    HKGrotesk: HankenGrotesk,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.maincontainer}>
      <Header setSearchText={setSearchText} />
      {showMap ? (
        <Map setShowMap={setShowMap} />
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
