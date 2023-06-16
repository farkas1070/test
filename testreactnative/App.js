import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Winery from "./views/winery/Winery";
import Event from "./views/event/Event";
import BottomNavigator from "./components/BottomNavigator";
import { PointOfInterestProvider } from "./context/PointOfInterestContext.js"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PointOfInterestProvider>
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
