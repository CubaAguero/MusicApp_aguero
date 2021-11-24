import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import color from './constants/colors';
import { Navigation } from './components/navigation/index'

export default function App() {

  return (
    <View style={styles.screen}>
      <Navigation />

      <StatusBar style="auto" />
    </View>

   
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.bg,
    flex: 1,
  },
  text: {
    color: color.textColor
  }
});