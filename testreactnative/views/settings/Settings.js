import { Text, View,TouchableOpacity,Alert } from "react-native";
import React, { useState,  useContext } from "react";
import { styles } from "./SettingsStyle";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LanguageContext } from "../../context/PointOfInterestContext";
import ConfirmationModal from "./components/ConfirmationModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getWineries,
  getEvents,
  getNews} from "../../controllers/WordpressProvider"
import { WineriesContext,EventsContext,NewsContext } from "../../context/PointOfInterestContext";


const Settings = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [Wineries, setWineries] = useContext(WineriesContext);
  const [events, setEvents] = useContext(EventsContext);
  const [news, setNews] = useContext(NewsContext);
  
  const openModal = () => {
    setModalVisible(true);
  }
  const closeModal = () => {
    setModalVisible(false);
  }
  const saveChanges = async() => { 
    AsyncStorage.setItem("Language", language);
    const wineries = await getWineries(language);
    const events = await getEvents(language); 
    const news = await getNews(language);
    setWineries(wineries);
    setEvents(events);
    setNews(news);
    
    

    setModalVisible(false);
    Alert.alert("Settings Saved")
  }
 
  return (
    <View style={styles.maincontainer}>
      <ConfirmationModal modalVisible={modalVisible} closeModal={closeModal} saveChanges={saveChanges} />


      <View style={styles.languagecontainer}>
        <Text style={styles.languagetext}>Language</Text>
        <View style={styles.checkboxcontainer}>
          <View style={styles.checkbox}>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "black" }}
              onPress={() => {
                setLanguage("hu");
              }}
              isChecked={language === "hu" ? true : false}
              disableBuiltInState={true}
            />
            <Text style={styles.checkboxtext}>Magyar</Text>
          </View>
          <View style={styles.checkbox}>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "black" }}
              onPress={() => {
                setLanguage("en");
              }}
              isChecked={language === "en" ? true : false}
              disableBuiltInState={true}
            />
            <Text style={styles.checkboxtext}>English</Text>
          </View>
          <View style={styles.checkbox}>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "black" }}
              onPress={() => {
                setLanguage("de");
              }}
              isChecked={language === "de" ? true : false}
              disableBuiltInState={true}
            />
            <Text style={styles.checkboxtext}>Deutsch</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>{openModal()}} style={styles.savebutton}>
          <Text style={styles.savetext}>
              Mentés
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
