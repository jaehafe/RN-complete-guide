import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import ProfileBody from '../components/ProfileBody';

const Profile = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <ProfileBody
          name="Adam"
          accountName="adam"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="300"
          following={35}
          posts="458"
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeView: {
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    padding: 10,
  },
});
