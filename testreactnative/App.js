import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PointOfInterestProvider } from "./context/PointOfInterestContext.js";
import StackNavigator from "./components/StackNavigator";
import React from "react";


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
