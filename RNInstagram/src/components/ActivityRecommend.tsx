import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {IFriendsProfileData} from '../db';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import AntDesign from 'react-native-vector-icons/AntDesign';

interface IActivityRecommend {
  data: IFriendsProfileData;
}

const ActivityRecommend = ({data}: IActivityRecommend) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [follow, setFollow] = useState(data.follow);
  const [close, setClose] = useState(false);

  return (
    <View>
      {close ? null : (
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.userInfoContainer}
              onPress={() =>
                navigation.push('FriendProfile', {
                  name: data.name,
                  profileImage: data.profileImage,
                  follow,
                  posts: data.posts,
                  followers: data.followers,
                  following: data.following,
                })
              }>
              <Image source={data.profileImage} style={styles.profileImg} />
              <View style={styles.userInfoWrapper}>
                <Text style={styles.userName}>{data.name}</Text>
                <Text style={styles.userAccountName}>{data.accountName}</Text>
                <Text style={styles.userAccountName}>회원님을 위한 추천</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper}>
            {follow ? (
              <TouchableOpacity
                onPress={() => setFollow(!follow)}
                style={{width: follow ? 90 : 68}}>
                <View style={styles.followButton}>
                  <Text style={{color: follow ? 'black' : 'white'}}>
                    {follow ? 'following' : 'follow'}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity onPress={() => setFollow(!follow)}>
                  <View style={styles.followButton}>
                    <Text style={{color: follow ? 'black' : 'white'}}>
                      {follow ? 'following' : 'follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setClose(true)}>
                  <AntDesign style={styles.closeIcon} name="close" />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ActivityRecommend;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '64%',
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  userInfoWrapper: {
    width: '100%',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  userAccountName: {
    fontSize: 12,
    opacity: 0.5,
  },
  followButton: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    paddingHorizontal: 10,
  },
  closeIcon: {
    fontSize: 14,
    color: 'black',
    opacity: 0.8,
  },
});
