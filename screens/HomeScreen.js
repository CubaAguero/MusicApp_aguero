import { StatusBar } from "expo-status-bar";
import React from "react";
import { 
    View, 
    StyleSheet,
    Text,
    Button
} from 'react-native';
import color from '../constants/colors';
import Fav from "./Fav";

export default function Inicio({ navigation, route }) {
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
        alignItems: 'center',
        justifyContent:'center'
    },
    Btn: {
        color: color.buttonColor
    }
    
    
})