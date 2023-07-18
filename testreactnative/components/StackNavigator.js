import { StyleSheet } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../views/home/components/SplashScreen";
import OnBoarding from "../views/home/components/OnBoarding";
import DrawerNavigator from "./DrawerNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Winery from "../views/winery/Winery";
import Event from "../views/event/Event";
import New from "../views/new/New";
import TourInfo from "../views/tourinfo/TourInfo";
import NoDataView from "../views/NoDataView/NoDataView";
import { LoadingContext } from "../context/GlobalContext";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [firstTimeOpen, setFirstTimeOpen] = useState(null);
  const [loaded] = useContext(LoadingContext);

  useEffect(() => {
    const getData = async () => {
      if (!loaded) {
        const value = await AsyncStorage.getItem("firstTimeOpen");
        setFirstTimeOpen(value);
      }
    };
    getData();
  }, [loaded]);

  if (loaded) {
    return <SplashScreen />;
  }
  if (loaded === null) {
    return <NoDataView />;
  }

  return (
    <Stack.Navigator>
      {firstTimeOpen ? (
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
      ) : null}
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Event"
        component={Event}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
      />
      <Stack.Screen
        name="Winery"
        component={Winery}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
      />

      <Stack.Screen
        name="New"
        component={New}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
      />
      <Stack.Screen
        name="TourInfo"
        component={TourInfo}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
