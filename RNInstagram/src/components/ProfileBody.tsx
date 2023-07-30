import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {IFriendsProfileData} from '../db';

import Feather from 'react-native-vector-icons/Feather';

const ProfileBody = ({
  name,
  accountName,
  profileImage,
  posts,
  followers,
  following,
}: Omit<IFriendsProfileData, 'follow'>) => {
  return (
    <View>
      {accountName ? (
        <View>
          <View>
            <Text>{accountName}</Text>
            <Feather name="chevron-down" />
          </View>
          <View>
            <Feather name="plus-square" />
            <Feather name="menu" />
          </View>
        </View>
      ) : null}
      <View style={styles.container}>
        {/*  */}
        <View style={styles.alignCenter}>
          <Image source={profileImage} style={styles.profileImg} />
          <Text style={styles.userName}>{name}</Text>
        </View>
        {/* 게시물 */}
        <View style={styles.alignCenter}>
          <Text style={styles.textDesc}>{posts}</Text>
          <Text>게시물</Text>
        </View>
        {/* 팔로워 */}
        <View style={styles.alignCenter}>
          <Text style={styles.textDesc}>{followers}</Text>
          <Text>팔로워</Text>
        </View>
        {/* 팔로잉 */}
        <View style={styles.alignCenter}>
          <Text style={styles.textDesc}>{following}</Text>
          <Text>팔로잉</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileBody;

const styles = StyleSheet.create({
  //
  profileImg: {
    resizeMode: 'cover',
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  alignCenter: {
    alignItems: 'center',
  },
  userName: {
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  textDesc: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
