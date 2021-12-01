import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import color from '../../constants/colors'
import Buscar from  '../../screens/Buscar';
import Premiun from '../../screens/Premiun';
import { HomeNavigation } from './HomeNavigation';
import { LibraryNavigation } from './LibraryNavigation'

const Tabs = createBottomTabNavigator();

const Tab_icon = {
    Inicio: 'home-sharp',
    Buscar: 'search-outline',
    Biblioteca: 'library-outline',
    Premiun: 'person-circle-outline'
}

const createScreenOptions = ({ route }) => {
    const iconName = Tab_icon[route.name];
    return {
        tabBarIcon: ({ size, color}) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            backgroundColor: color.bg
        },
        headerShown: false
    }
}

export const AppNavigation = () => (
    
    <Tabs.Navigator
        screenOptions={createScreenOptions}
    >
        <Tabs.Screen name='Inicio' component={HomeNavigation} />
        <Tabs.Screen name='Buscar' component={Buscar} />
        <Tabs.Screen name='Biblioteca' component={LibraryNavigation} />
        <Tabs.Screen name='Premiun' component={Premiun} />
    </Tabs.Navigator>
)