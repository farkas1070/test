import { Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./OnboardingStyle";
import { getLocales } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const OnBoarding = () => {
  const navigation = useNavigation();
  const systemLanguage = getLocales()[0].languageCode;
  const [selectedLanguage, setSelectedLanguage] = useState(systemLanguage);
  const imageSource =
    selectedLanguage === "hu"
      ? "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Hungary.png"
      : selectedLanguage === "en"
      ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png"
      : selectedLanguage === "de"
      ? "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
      : "";
  const titleSource =
    selectedLanguage === "hu"
      ? "Válassz nyelvet"
      : selectedLanguage === "en"
      ? "Choose language"
      : selectedLanguage === "de"
      ? "Wähle eine Sprache"
      : "";

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("FirstTimeOpen", value);
      await AsyncStorage.setItem("Language", selectedLanguage);
      console.log("saved data");
    } catch (e) {
      console.log(e);
    }
  };
  const removeData = async (value) => {
    try {
      await AsyncStorage.removeItem("FirstTimeOpen");
      console.log("deleted data");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Onboarding
      onDone={() => {
        storeData("true");
        navigation.navigate("Drawer");
      }}
      showSkip={false}
      nextLabel={
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
      }
      pages={[
        {
          backgroundColor: "#efeae1",
          image: (
            <Image
              source={{
                uri: "https://cdn.shopify.com/s/files/1/0525/4361/9238/files/3_f04ac13d-e77b-4f56-a04c-b16a901f18f4_1200x1200.png?v=1620164482",
              }}
              style={{ width: 200, height: 150 }}
            />
          ),
          title: (
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Üdvözlünk a Soproni Borvidék alkalmazásában!
              </Text>
            </View>
          ),
          subtitle: (
            <View
              style={{
                width: "95%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  paddingTop: 15,
                }}
              >
                Az alkalmazás segítségével megismerheted a Soproni Borvidék
                borait, borászatait, rendezvényeit és látnivalóit.
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: "#3498db",
          image: (
            <Image
              source={{
                uri: imageSource,
              }}
              style={{ width: 150, height: 100 }}
            />
          ),
          title: titleSource,
          subtitle: (
            <View style={{ width: "100%" }}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Magyar" value="hu" />
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Deutsch" value="de" />
              </Picker>
            </View>
          ),
        },
        {
          backgroundColor: "#fe6e58",
          image: <FontAwesome name="bell-o" size={130} color="white" />,
          title: "Engedélyek Megadása",

          subtitle: (
            <View style={{ width: "100%", marginTop: 20 }}>
              <Text style={styles.requestpermissiontext}>
                Szükségünk van az alkalmazás megfelelő működéséhez a helyadatok
                és értesítések engedélyezéséhez
              </Text>
              <View style={styles.buttoncontainer}>
                <TouchableOpacity
                  style={styles.notenablebutton}
                  onPress={() => {
                    removeData();
                  }}
                >
                  <Text>Tiltás</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.enablebutton}
                  onPress={() => {
                    storeData("hello");
                  }}
                >
                  <Text>Engedélyezés</Text>
                </TouchableOpacity>
              </View>
            </View>
          ),
        },
      ]}
    />
  );
};

export default OnBoarding;
