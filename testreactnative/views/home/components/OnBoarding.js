import { Image } from "react-native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const OnBoarding = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Onboarding
      onDone={() => console.log("done")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <FontAwesome name="language" size={132} color="black" />,
          title: "Válassz nyelvet",
          subtitle: (
            <View>
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
          image: (
            <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/circle-png/black-circle-thin-icon-download-9.png",
              }}
              style={{ width: 100, height: 100 }}
            />
          ),
          title: "The Title",
          subtitle: "This is the subtitle that sumplements the title.",
        },
        {
          backgroundColor: "#999",
          image: (
            <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/circle-png/black-circle-thin-icon-download-9.png",
              }}
              style={{ width: 100, height: 100 }}
            />
          ),
          title: "Triangle",
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );
};

export default OnBoarding;
