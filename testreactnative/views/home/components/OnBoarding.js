import { Image } from "react-native";
import React from "react";
import { Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { FontAwesome } from "@expo/vector-icons";

const OnBoarding = () => (
  <Onboarding
    onDone={() => console.log("done")}
    pages={[
      {
        backgroundColor: "#fff",
        image: <FontAwesome name="language" size={100} color="black" />,
        title: "Válassz nyelvet",
        subtitle: (
          <View>
            <Text>Magyar</Text>
            <Text>English</Text>
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

export default OnBoarding;
