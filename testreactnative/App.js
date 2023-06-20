import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Winery from "./views/winery/Winery";
import Event from "./views/event/Event";
import New from "./views/new/New";
import BottomNavigator from "./components/BottomNavigator";
import { PointOfInterestProvider } from "./context/PointOfInterestContext.js";
import DrawerNavigator from "./components/DrawerNavigation";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "./components/StackNavigator";

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
