import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';

const Search = () => {
  const [image, setImage] = useState<string | null>(null);

  const getData = (data: any) => {
    setImage(data);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />
        <SearchContent data={getData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
});
