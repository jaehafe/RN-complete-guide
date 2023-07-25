import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import CheckboxUnchecked from '../assets/checkbox-checked.svg';
import CheckboxChecked from '../assets/checkbox-checked.svg';
import DeleteIcon from '../assets/delete.svg';

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.itemCheckbox} hitSlop={10}>
        <CheckboxUnchecked />
        <CheckboxChecked style={styles.itemCheckboxCheckedIcon} />
        <Text>check</Text>
      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>코딩하기</Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemCheckboxCheckedIcon: {
    width: 10,
    height: 10,
  },
});
