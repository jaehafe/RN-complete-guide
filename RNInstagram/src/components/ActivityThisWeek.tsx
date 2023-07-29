import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {FriendsProfileData} from '../db';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const ActivityThisWeek = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <>
      <Text style={styles.titleText}>이번 주</Text>
      <View style={styles.wrapper}>
        {FriendsProfileData.slice(0, 3).map((data, index) => {
          const {name, profileImage, follow, posts, followers, following} =
            data;
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.push('FriendProfile', {
                  name,
                  profileImage,
                  follow,
                  posts,
                  followers,
                  following,
                })
              }>
              <Text>{name} </Text>
            </TouchableOpacity>
          );
        })}
        <Text>님이 팔로우 하기 시작했습니다.</Text>
      </View>
    </>
  );
};

export default ActivityThisWeek;

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
