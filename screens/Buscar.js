import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import color from '../constants/colors'

export default function Buscar() {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>Buscar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: color.bg,
        flex: 1,
        padding: 40
    },
    text: {
        color: color.textColor
    }
}) 
    