import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default function Card(props) {
    return(
        <View>
            <Text>{props.title}</Text>
            <Image source={{uri:  props.imageUri }} />
        </View>
    )
}