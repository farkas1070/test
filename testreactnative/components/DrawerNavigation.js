import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';
import BottomNavigator from './BottomNavigator';


const Drawer = createDrawerNavigator();



const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    
    <Drawer.Screen
      name="Home"
      component={BottomNavigator}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'apps' : 'apps-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;