import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './app.navigation';

export const Navigation = () => (
    <NavigationContainer>
        <AppNavigation />
    </NavigationContainer>
)