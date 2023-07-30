import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {IFriendsProfileData} from '../db';

import Feather from 'react-native-vector-icons/Feather';

interface IProfileButton
  extends Pick<IFriendsProfileData, 'name' | 'accountName' | 'profileImage'> {
  id: number;
}

const ProfileButton = ({
  id,
  name,
  accountName,
  profileImage,
}: IProfileButton) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [follow, setFollow] = useState<boolean | null>(false);

  return (
    <>
      {id === 0 ? (
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.push('EditProfile', {
                name,
                accountName,
                profileImage,
              })
            }>
            <View>
              <Text>프로필 수정</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={styles.followButtonContainer}>
            <View
              style={[
                styles.followButton,
                {backgroundColor: follow ? '' : '#3493D9'},
              ]}>
              <Text style={{color: follow ? 'black' : 'white'}}>
                {follow ? '팔로잉' : '팔로우'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.sendMsgButtonContainer}>
            <Text>메시지</Text>
          </View>
          <View style={styles.moreButtonContainer}>
            <Feather name="chevron-down" style={styles.moreButtonIcon} />
          </View>
        </View>
      )}
    </>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  followButtonContainer: {
    width: '42%',
  },
  followButton: {
    width: '100%',
    height: 35,
    borderRadius: 5,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendMsgButtonContainer: {
    width: '42%',
    height: 35,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  moreButtonContainer: {
    width: '10%',
    height: 35,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  moreButtonIcon: {
    fontSize: 20,
    color: 'black',
  },
});
