import React, { useEffect, useState } from "react";

import AddItem from '../components/AddItem';
import Modal from '../components/Modal';

export default function Fav({ List }) {
    const [inputText, setInputText] = useState('');
    const [inputError, setInputError] = useState('');
    const [itemList, setItemList] = useState();
    console.log(List, 'list')
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
      setItemList(...itemList, List)
    },[])

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
        <>
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
        </>

    )
}