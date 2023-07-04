import { Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./OnboardingStyle";

const OnBoarding = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Onboarding
      onDone={() => console.log("done")}
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
          backgroundColor: "#fff",
          image: <FontAwesome name="language" size={132} color="black" />,
          title: "Válassz nyelvet",
          subtitle: (
            <View style={{ width: "100%" }}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          ),
        },
        {
          backgroundColor: "#fe6e58",
          image: <FontAwesome name="bell-o" size={130} color="white" />,
          title: "Engedélyek Megadása",

          subtitle: (
            <View style={{ width: "100%",marginTop:20 }}>
              <Text style={styles.requestpermissiontext}>
                Szükségünk van az alkalmazás megfelelő működéséhez a helyadatok
                és értesítések engedélyezéséhez
              </Text>
              <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.notenablebutton}>
                  <Text>Tiltás</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.enablebutton} >
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
