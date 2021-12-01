import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import colors from "../../constants/colors";

const Stack = createNativeStackNavigator();   

export const HomeNavigation = () => (
    <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions= {{
            headerStyle: {
                backgroundColor: colors.bg
            },
            headerTintColor: colors.textColor
        }}
    >
        <Stack.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
                title: 'Bienvenido'
            }}
        />
    </Stack.Navigator>
)

