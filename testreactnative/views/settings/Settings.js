import { Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { styles } from "./SettingsStyle";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LanguageContext } from "../../context/PointOfInterestContext";
import ConfirmationModal from "./components/ConfirmationModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getWineries,
  getEvents,
  getNews,
} from "../../controllers/WordpressProvider";
import {
  WineriesContext,
  EventsContext,
  NewsContext,
} from "../../context/PointOfInterestContext";
import I18nProvider from "../../lang/LanguageManager";

const Settings = () => {
  const i18n = I18nProvider();
  const [language, setLanguage] = useContext(LanguageContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [Wineries, setWineries] = useContext(WineriesContext);
  const [events, setEvents] = useContext(EventsContext);
  const [news, setNews] = useContext(NewsContext);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const saveChanges = async () => {
    AsyncStorage.setItem("Language", language);
    const wineries = await getWineries(language);
    const events = await getEvents(language);
    const news = await getNews(language);
    setWineries(wineries);
    setEvents(events);
    setNews(news);

    setModalVisible(false);
    Alert.alert("Settings Saved");
  };

  return (
    <View style={styles.maincontainer}>
      <ConfirmationModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        saveChanges={saveChanges}
      />

      <View style={styles.languagecontainer}>
        <Text style={styles.languagetext}>{i18n.t("language")}</Text>
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
            <Text style={styles.checkboxtext}>{i18n.t("hungary")}</Text>
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
            <Text style={styles.checkboxtext}>{i18n.t("english")}</Text>
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
            <Text style={styles.checkboxtext}>{i18n.t("german")}</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            openModal();
          }}
          style={styles.savebutton}
        >
          <Text style={styles.savetext}>{i18n.t("save")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
