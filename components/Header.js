import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../constants/colors";

export default function Header() {
    return(
        <View style={style.header}>
            <Text style={style.headerText}>Bienvenido</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        marginTop: 30,
        width: '100%',
        height: 40,
        backgroundColor: color.grey,
        opacity: 0.9,
    },
    headerText: {
        color: color.textColor,
        fontSize: 22,
    }
})