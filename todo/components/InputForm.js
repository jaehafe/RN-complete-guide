import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (currentValue !== '') {
      dispatch(addTodo(currentValue));
      setCurrentValue('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
        value={currentValue}
        onChangeText={setCurrentValue}
        onSubmitEditing={handleSubmit}
      />

      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20, // padding-left와 padding-right 합친 개념
    backgroundColor: '#f7f8fa',
  },
  inputField: {
    flex: 1,
    height: 42,
    borderRadius: 4,
    padding: 5,
    marginRight: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.2)',
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0, 0.7)',
    shadowColor: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  addButtonText: {
    color: 'white',
    fontSize: 25,
  },
});
