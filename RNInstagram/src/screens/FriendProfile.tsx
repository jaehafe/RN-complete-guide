import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const FriendProfile = ({route, navigation}: any) => {
  const {name, profileImage, posts, followers, following} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.profileNameWrapper}>
          <Text style={styles.profileName}>{name}</Text>
          <Feather name="more-vertical" style={styles.moreIcon} />
        </View>
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
});
