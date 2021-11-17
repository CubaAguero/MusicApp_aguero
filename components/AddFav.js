import React, { useState } from "react";
import { Button, Alert } from "react-native";

import AddItem from '../components/AddItem';
import color from '../constants/colors'

export default function AddFav({ onInput }) {
    const [inputText, setInputText] = useState('');
    const [inputError, setInputError] = useState('');
    const [itemList, setItemList] = useState([]);

    const handleChangeText = (text) => {
        setInputText(text);
        setInputError('');
    };
  
    const handleAddItem = () => {
        if (inputText) {
          setItemList([
            ...itemList,
            {
              id: Math.random().toString(),
              value: inputText,
            },
          ]);
          setInputText('');
          setInputError('');
          Alert.alert('', 'Agregaste la Cancion a Favoritos!', [{
              text: 'OK', onPress: () => console.log('alert close')
          }])
        } else {
          setInputError('Required');
        }
    }
    
    const handleOnPress = () => {
        onInput(itemList)
    }
    console.log(itemList, 'itemlist')
    return(
        <>
            <AddItem 
                handleChangeText={handleChangeText}
                handleAddItem={handleAddItem}
                inputError={inputError}
                inputText={inputText}
            />
            <Button 
              title='Ir a Favoritos'
              onPress={handleOnPress} 
              color={color.buttonColor}
            />
        </>
    )
}