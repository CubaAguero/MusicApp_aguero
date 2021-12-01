import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Button, StyleSheet } from 'react-native';
import color from '../constants/colors'

export default function Biblioteca({ navigation, route}) {
    return(
        <View style={styles.screen}>
             <Button 
                title='Ir a Favoritos'
                onPress={() => navigation.navigate('Favoritos')}
                color={color.buttonColor}
            />

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: color.bg,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    text: {
        color: color.textColor
    }
})