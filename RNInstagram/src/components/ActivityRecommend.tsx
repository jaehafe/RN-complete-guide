import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IFriendsProfileData} from '../db';

interface IActivityRecommend {
  data: IFriendsProfileData;
}

const ActivityRecommend = ({data}: IActivityRecommend) => {
  return (
    <View>
      <Text>ActivityRecommend</Text>
    </View>
  );
};

export default ActivityRecommend;

const styles = StyleSheet.create({});
