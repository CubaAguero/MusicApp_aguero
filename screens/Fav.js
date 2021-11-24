import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AddItem from '../components/AddItem';
import List from '../components/List/Index'
import Modal from '../components/Modal';
import color from "../constants/colors";

export default function Fav() {
    const [inputText, setInputText] = useState('');
    const [inputError, setInputError] = useState('');
    const [itemList, setItemList] = useState([]);
  
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

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
      } else {
        setInputError('Required');
      }
    }
  
    const handleConfirmDelete = () => {
      const id = itemSelected.id;
      setItemList(itemList.filter(item => item.id !== id));
      setModalVisible(false);
      setItemSelected({});
    }
  
    const handleModal = id => {
      setItemSelected(itemList.find(item => item.id === id));
      setModalVisible(true);
    }
  
   
    return (
        <View style={styles.screen}>
            <AddItem 
                handleChangeText={handleChangeText}
                handleAddItem={handleAddItem}
                inputError={inputError}
                inputText={inputText}
            />
            <List 
                itemList={itemList}
                handleModal={handleModal}
            />

            <Modal 
                modalVisible={modalVisible}
                handleConfirmDelete={handleConfirmDelete}
                itemSelected={itemSelected}
            />
        </View>

    )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.bg,
    flex: 1
  }
})