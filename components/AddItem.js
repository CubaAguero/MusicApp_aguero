import React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';
import color from '../constants/colors'

const AddItem = ({
  handleChangeText,
  handleAddItem,
  inputText,
  inputError,
}) => {
  return (
    <React.Fragment>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Agregar Cancion"
          placeholderTextColor={color.textColor}
          style={styles.input}
          onChangeText={handleChangeText}
          value={inputText}
        />
        <Button
          title="ADD"
          color={color.buttonColor}
          onPress={handleAddItem}
        />
      </View>
      <Text style={styles.inputError}>{inputError}</Text>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 200,
    color: color.textColor
  },
  inputError: {
    color: 'red',
  },
});

export default AddItem;