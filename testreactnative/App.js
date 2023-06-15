import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapComponent from "./components/MapComponent";


import Home from "./views/home/Home";
import Winery from "./views/winery/Winery";
import Wineries from "./views/wineries/Wineries";
import Event from "./views/event/Event";
import Events from "./views/events/Events";
import Map from "./views/map/Map";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false,}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Winery" component={Winery} />
        <Stack.Screen name="Wineries" component={Wineries} />
      </Stack.Navigator>
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
