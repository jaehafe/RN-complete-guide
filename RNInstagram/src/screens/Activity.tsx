import {View, Text} from 'react-native';
import React from 'react';

const Activity = ({route}: any) => {
  console.log('route>>', route);

  return (
    <View>
      <Text>Activity</Text>
    </View>
  );
};

export default Activity;
