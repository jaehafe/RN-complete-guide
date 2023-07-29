import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IFriendsProfileData} from '../db';

interface ActivityPrevious {
  data: IFriendsProfileData;
}

const ActivityPrevious = ({data}: ActivityPrevious) => {
  return (
    <View>
      <Text>ActivityPrevious</Text>
    </View>
  );
};

export default ActivityPrevious;

const styles = StyleSheet.create({});
