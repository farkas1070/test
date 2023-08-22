import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  View,
} from "react-native";
import React, { useContext } from "react";
import { styles } from "./WineryStyle";
import Placeholder from "../../assets/placeholder.png";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import { tagsStyles } from "./ContentStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SvgCssUri } from "react-native-svg";
import { I18nContext } from "../../context/GlobalContext";
import TopHeader from "./components/TopHeader";
import WebshopIcon from "../../assets/wineryassets/webshopIcon.svg";
import { FontAwesome5 } from "@expo/vector-icons";
import LocationIcon from "../../assets/wineryassets/locationIcon.svg";
import { FontsContext } from "../../context/GlobalContext";
const Winery = ({ route }) => {
  const { width } = useWindowDimensions();
  const winery = route.params.item;
  const source = {
    html: winery.content,
  };
  const fontsLoaded = useContext(FontsContext);

  const [i18n] = useContext(I18nContext);

  const openGoogleMaps = async () => {
    console.log(winery.map);
    if (Platform.OS === "ios") {
      Linking.openURL(`maps://app?&daddr=${winery.map.lat}+${winery.map.lng}`);
    } else {
      Linking.openURL(
        `https://www.google.com/maps/dir/?api=1&destination=${winery.map.lat},${winery.map.lng}`
      );
    }
  };
  const openLink = (link) => {
    if (link !== "") {
      Linking.openURL(link);
    }
  };
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView>
          <TopHeader item={winery.banner} />

          <View style={styles.topTextContainer}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={winery.logo ? { uri: winery.logo } : Placeholder}
            />
            {winery.connection.webshop !== "" && (
              <TouchableOpacity style={styles.webshopButton} onPress={()=>{openLink(winery.connection.webshop)}}>
                <WebshopIcon width={60} height={60}></WebshopIcon>
              </TouchableOpacity>
            )}
            <View style={styles.topContainer}>
              <Text style={[styles.nameText, { fontFamily: "HKGrotesk" }]}>
                {winery.title}
              </Text>
              <View style={styles.mainSocialIconsContainer}>
                <View style={styles.socialIconsContainer}>
                  <FontAwesome5
                    name="facebook"
                    size={30}
                    color="white"
                    style={styles.icon}
                  />
                  <FontAwesome5
                    name="instagram"
                    size={30}
                    color="white"
                    style={styles.icon}
                  />
                  <FontAwesome5
                    name="linkedin"
                    size={30}
                    color="white"
                    style={styles.icon}
                  />
                </View>
                {winery.map.lat != undefined && winery.map.lng != undefined && (
                  <TouchableOpacity
                    onPress={() => {
                      openGoogleMaps();
                    }}
                    style={styles.takeToGoogleButton}
                  >
                    <MaterialCommunityIcons
                      name="google-maps"
                      size={30}
                      color="#FFBD54"
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View style={{ backgroundColor: "white" }}>
              <View style={styles.infoContainer}>
                <LocationIcon
                  width={20}
                  height={20}
                  style={styles.locationIcon}
                />
                <View style={styles.adressContainer}>
                  <Text
                    style={[styles.mainAdressText, { fontFamily: "HKGrotesk" }]}
                  >
                    {winery.connection.adress
                      ? winery.connection.adress
                      : "Nincs Cím Megadva"}
                  </Text>
                  <Text
                    style={[styles.subAdressText, { fontFamily: "HKGrotesk" }]}
                  >
                    {winery.connection.telephone
                      ? winery.connection.telephone
                      : "Nincs Telefon Megadva"}
                  </Text>
                  <Text
                    style={[styles.subAdressText, { fontFamily: "HKGrotesk" }]}
                  >
                    {winery.connection.email
                      ? winery.connection.email
                      : "Nincs E-mail cím Megadva"}
                  </Text>
                </View>
              </View>
              {winery.connection.website == "" ? (
                <></>
              ) : (
                <View style={styles.infoContainer2}>
                  <LocationIcon
                    width={20}
                    height={20}
                    style={styles.locationIcon}
                  />
                  <View style={styles.adressContainer}>
                    <TouchableOpacity onPress={() => {openLink(winery.connection.website)}}>
                    <Text
                      style={[styles.websiteText, { fontFamily: "HKGrotesk" }]}
                    >
                      {winery.connection.website}
                    </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
          {winery.connection.ownerphoto && (
            <View style={styles.ownerPictureContainer}>
              <Image
                source={{ uri: winery.connection.ownerphoto }}
                style={styles.ownerImage}
              />
            </View>
          )}
          <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles={tagsStyles}
          />
          {winery.services !== undefined && (
            <View style={styles.bottomPurpleContainer}>
              <View style={styles.serviceTextContainer}>
                <Text
                  style={[styles.servicesText, { fontFamily: "HKGrotesk" }]}
                >
                  Szolgáltatások
                </Text>
              </View>
              <View style={styles.mainservicecontainer}>
                {winery.services?.map((service, index) => {
                  console.log(service);
                  return (
                    <View style={styles.serviceWrapper} key={index}>
                      <View style={styles.servicecontainer}>
                        <SvgCssUri uri={service.icon1} width={80} height={80} />
                      </View>
                      <View>
                        <Text
                          style={[
                            styles.servicetext,
                            { fontFamily: "HKGrotesk" },
                          ]}
                        >
                          {service.name.charAt(0).toUpperCase() +
                            service.name.slice(1)}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Winery;
