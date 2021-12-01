import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fav from '../../screens/Fav'
import colors from "../../constants/colors";
import Biblioteca from "../../screens/Biblioteca";

const Stack = createNativeStackNavigator();

export  const LibraryNavigation = () => (
    <Stack.Navigator 
    initialRouteName='Library' 
    screenOptions= {{
        headerStyle: {
            backgroundColor: colors.bg
        },
        headerTintColor: colors.textColor
    }}
    >
        <Stack.Screen 
            name='Library' 
            component={Biblioteca}
            options={{
                title: 'Tu bliblioteca'
            }}
        />
        <Stack.Screen 
            name='Favoritos'
            component={Fav}
        />
    </Stack.Navigator>
)