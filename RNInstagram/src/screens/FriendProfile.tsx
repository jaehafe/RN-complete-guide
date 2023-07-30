import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import FriendItem from '../components/FriendItem';

import {FriendsProfileData} from '../db';

const FriendProfile = ({route, navigation}: any) => {
  const {name, profileImage, posts, followers, following, accountName} =
    route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.profileNameWrapper}>
            <Text style={styles.profileName}>{name}</Text>
            <Feather name="more-vertical" style={styles.moreIcon} />
          </View>
        </View>
        {/* Profile Body */}
        <ProfileBody
          name={name}
          accountName={accountName}
          profileImage={profileImage}
          posts={posts}
          followers={followers}
          following={following}
        />
        {/* Profile Button */}
        <ProfileButton
          id={1}
          name={name}
          accountName={accountName}
          profileImage={profileImage}
        />
        {/* Profile Recommend */}
        <Text style={styles.profileRecommendText}>회원님을 위한 추천</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.profileRecommendScrollView}>
          {name === FriendProfile.name
            ? null
            : FriendsProfileData?.map((data, index) => (
                <FriendItem key={index} data={data} name={name} />
              ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FriendProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  wrapper: {
    padding: 10,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: 'black',
  },
  profileNameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
  },
  profileName: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  moreIcon: {
    fontSize: 20,
    color: 'black',
  },
  //
  profileRecommendText: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  profileRecommendScrollView: {
    paddingTop: 10,
  },
});
