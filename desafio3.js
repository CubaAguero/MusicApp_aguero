//App.js del desafio de splip components

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Fav from './screens/Fav';
import Header from './components/Header';
import color from './constants/colors';
import AddFav from './components/AddFav';


export default function App() {
  const [itemList, setItemList] = useState();

  const screen = itemList 
  ? <>
      <Header title='Favoritos' />
      <Fav List={itemList} />
    </>
  : <>
      <Header title='Bienvenido' /> 
      <AddFav onInput={setItemList} />
    </>

  return (
    <View style={styles.screen}>
      
      {screen}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: color.bg,
    flex: 1,
  },
});

///////////////

///////////////////////////

