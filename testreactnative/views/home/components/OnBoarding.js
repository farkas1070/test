import { Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./OnboardingStyle";
import { getLocales } from "expo-localization";

const OnBoarding = () => {
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
  return (
    <Onboarding
      onDone={() => console.log("done")}
      showSkip={false}
      nextLabel={
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
      }
      pages={[
        {
          backgroundColor: "#98FB98",
          image: (
            <Image
              source={{
                uri: "https://cdn.shopify.com/s/files/1/0525/4361/9238/files/3_f04ac13d-e77b-4f56-a04c-b16a901f18f4_1200x1200.png?v=1620164482",
              }}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Üdvözöl A Soproni Borvidék App",
          subtitle: "Kezdjünk is Bele!",
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
                <TouchableOpacity style={styles.notenablebutton}>
                  <Text>Tiltás</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.enablebutton}>
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
