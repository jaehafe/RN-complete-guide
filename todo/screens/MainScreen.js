import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.pageTitle}>Todo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
