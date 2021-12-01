import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import colors from '../constants/colors';

export default function Card(props) {
    
    return(
        <View style={styles.container}>
            <Image 
                source={{uri:  props.data.imageUri }} 
                style={styles.img}
            />
            <Text style={styles.text}>{props.data.title}</Text>
            <Text style={styles.text}>{props.data.artist}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        width: 150,
        height: 170,
        margin: 5
    },
    img: {
        width: '100%',
        height: 150
    },
    text: {
        color: colors.textColor,
        fontSize: 12,
    }
})