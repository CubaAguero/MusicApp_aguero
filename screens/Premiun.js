import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import colors from "../constants/colors";

export default function Premiun() {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>Premiun</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.bg,
        flex: 1,
        padding: 30
    },
    text: {
        color: colors.textColor
    }
})