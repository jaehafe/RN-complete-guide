import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.logoText}>Instagram</Text>
        </View>
        <View style={styles.headerIcon}>
          <FontAwesome name="plus-square-o" style={styles.addIcon} />
          <Feather name="navigation" style={styles.messageIcon} />
        </View>
      </View>
      <ScrollView>
        {/*  */}
        {/*  */}
      </ScrollView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 25,
    fontWeight: '500',
  },
  headerIcon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 24,
    paddingHorizontal: 15,
  },
  messageIcon: {
    fontSize: 24,
  },
});
