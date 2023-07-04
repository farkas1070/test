import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PointOfInterestProvider } from "./context/PointOfInterestContext.js";
import StackNavigator from "./components/StackNavigator";
import OnBoarding from "./views/home/components/OnBoarding.js";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";
import { hu, en, de } from "./lang/localizations.js";
import { I18n } from "i18n-js";

export default function App() {
  return (
    <PointOfInterestProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PointOfInterestProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
