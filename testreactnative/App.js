import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
<<<<<<< Updated upstream



=======
>>>>>>> Stashed changes
import Home from "./views/home/Home";
import Winery from "./views/winery/Winery";
import Wineries from "./views/wineries/Wineries";
import Event from "./views/event/Event";
import Events from "./views/events/Events";
import Map from "./views/map/Map";
import BottomNavigator from "./components/BottomNavigator";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="Winery" component={Winery} />
        <Stack.Screen
          name="BottomTab"
          component={BottomNavigator}
          options={{ headerShown: false }}
        />
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
