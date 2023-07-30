import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {IFriendsProfileData} from '../db';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface ActivityPrevious {
  data: IFriendsProfileData;
}

const ActivityPrevious = ({data}: ActivityPrevious) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [follow, setFollow] = useState(data.follow);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {/*  */}
        <TouchableOpacity
          style={styles.activityInfoContainer}
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
          <Text style={styles.activityInfoWrapper}>
            <Text style={styles.activityInfo}>{data.name}</Text>의 사진 및
            동영상을 보려면 팔로우 하세요.
          </Text>
        </TouchableOpacity>
        {/* follow button */}
        <TouchableOpacity
          onPress={() => setFollow(!follow)}
          style={{width: follow ? 72 : 68}}>
          <View
            style={[
              styles.followButtonWrapper,
              {
                backgroundColor: follow ? '' : '#3493D9',
                borderWidth: follow ? 1 : 0,
                borderColor: follow ? '#DEDEDE' : '',
              },
            ]}>
            <Text style={{color: follow ? 'black' : 'white'}}>
              {follow ? 'Following' : 'Follow'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityPrevious;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  activityInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '64%',
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 100,
    marginRight: 10,
  },
  activityInfoWrapper: {
    fontSize: 15,
  },
  activityInfo: {
    fontWeight: 'bold',
  },
  followButtonWrapper: {
    width: '100%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
