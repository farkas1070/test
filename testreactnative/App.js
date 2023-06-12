import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapComponent from "./components/MapComponent"
import Home from "./components/Home"
import Calendar from "./components/Calendar"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Calendar">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Map" component={MapComponent} />
          <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
