import {View, Text} from 'react-native';
import React from 'react';

const Activity = ({route}: any) => {
  const {name, image} = route.params;
  console.log('name>>', name);
  console.log('image>>', image);

  return (
    <View>
      <Text>Activity</Text>
    </View>
  );
};

export default Activity;
