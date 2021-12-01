import { StatusBar } from "expo-status-bar";
import React from "react";
import { 
    View, 
    StyleSheet,
} from 'react-native';
import Card from "../components/Card";
import color from '../constants/colors';

const data =  {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

export default function Inicio({ navigation, route }) {
    return(
        <View style={styles.screen}>
            <Card data={data}/>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: color.bg,
        flex: 1,
        paddingTop: 20
    },
    
})