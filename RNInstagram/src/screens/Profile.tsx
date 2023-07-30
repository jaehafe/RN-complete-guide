import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';

import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View style={styles.circleWrapper}>
            <Entypo name="plus" style={styles.plusIconInCircle} />
          </View>
        ) : (
          <View style={styles.restCircle}></View>
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        {/* Profile Body */}
        <ProfileBody
          name="Adam"
          accountName="adam"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="300"
          following={35}
          posts="458"
        />
        {/* Profile Button */}
        <ProfileButton
          id={0}
          name="Adam"
          accountName="adam"
          profileImage={require('../../assets/images/userProfile.jpeg')}
        />
      </View>
      {/* Circle */}
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.circleContainer}>
          {circles}
        </ScrollView>
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
  circleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  circleWrapper: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIconInCircle: {
    fontSize: 40,
    color: 'black',
  },
  restCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.1,
    marginHorizontal: 5,
  },
});
