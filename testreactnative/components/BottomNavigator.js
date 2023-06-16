import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Events from "../views/events/Events";
import Map from "../views/map/Map";
import Wineries from '../views/wineries/Wineries';
import Home from "../views/home/Home";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Home}
        
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
          
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            
            textAlign: 'center',
          },
          headerLeft: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="menu" size={24} color="black" />
            </View>
          ),
          headerRight: () => (
            <View style={{ paddingRight: 10 }}>
              <Ionicons name="information-circle-outline" size={24} color="black" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: () => (
            <Ionicons name="map-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: () => (
            <Ionicons name="calendar-outline" size={24} color="black" />
          ),
          
          headerTintColor: 'black',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            
            textAlign: 'center',
          },
          headerLeft: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons name="menu" size={24} color="black" />
            </View>
          ),
          headerRight: () => (
            <View style={{ paddingRight: 10 }}>
              <Ionicons name="information-circle-outline" size={24} color="black" />
              
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wineries"
        component={Wineries}
        options={{
          tabBarIcon: () => (
            <Ionicons name="wine-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})