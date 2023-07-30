import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {IFriendsProfileData} from '../db';

import AntDesign from 'react-native-vector-icons/AntDesign';

interface IFriendItem {
  name: string;
  data: IFriendsProfileData;
}

const FriendItem = ({data, name}: IFriendItem) => {
  const [isFollow, setIsFollow] = useState(false);
  const [close, setClose] = useState(false);

  const followButtonStyle = {
    backgroundColor: isFollow ? 'transparent' : '#3493D9',
    borderWidth: isFollow ? 1 : 0,
  };

  return (
    <View>
      {data.name === name || close ? null : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => setClose(true)}
            style={styles.closeButtonContainer}>
            <AntDesign name="close" style={styles.closeButton} />
          </TouchableOpacity>
          <Image
            source={data.profileImage}
            style={styles.recommendUserProfileImg}
          />
          <Text style={styles.recommendUserName}>{data.name}</Text>
          <Text style={styles.recommendUserAccountName}>
            {data.accountName}
          </Text>
          <TouchableOpacity
            onPress={() => setIsFollow(!isFollow)}
            style={styles.followButtonContainer}>
            <View style={[styles.followButtonWrapper, followButtonStyle]}>
              <Text style={{color: isFollow ? 'black' : 'white'}}>
                {isFollow ? '팔로잉' : '팔로우'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FriendItem;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    borderRadius: 2,
    position: 'relative',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButton: {
    fontSize: 20,
    color: 'black',
    opacity: 0.5,
  },
  recommendUserProfileImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    margin: 10,
  },
  recommendUserName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  recommendUserAccountName: {
    fontSize: 12,
  },
  followButtonContainer: {
    width: '80%',
    paddingVertical: 10,
  },
  followButtonWrapper: {
    width: ' 100%',
    height: 30,
    borderRadius: 5,
    borderColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
