import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalContextProvider } from "./context/GlobalContext.js";
import StackNavigator from "./components/StackNavigator";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <GlobalContextProvider>
        <StackNavigator />
      </GlobalContextProvider>
    </NavigationContainer>
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
