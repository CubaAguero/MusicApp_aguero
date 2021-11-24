import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import Fav from '../../screens/Fav'

const Stack = createNativeStackNavigator();

export const HomeNavigation = () => (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Favoritos' component={Fav} />
    </Stack.Navigator>
)