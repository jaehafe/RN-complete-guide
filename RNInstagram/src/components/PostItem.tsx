import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPostInfoData} from './Posts';

import Feather from 'react-native-vector-icons/Feather';

interface IPostItem {
  data: IPostInfoData;
}

const PostItem = ({data}: IPostItem) => {
  return (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeaderContainer}>
        <View style={styles.postHeaderAuthorInfo}>
          <Image
            source={data.postPersonImage}
            style={styles.postHeaderPersonImage}
          />
          <View style={styles.postHeaderAuthorNameContainer}>
            <Text style={styles.postHeaderAuthorText}>{data.postAuthor}</Text>
          </View>
        </View>
        <Feather name="more-vertical" style={styles.postHeaderMoreButton} />
      </View>
      {/* Post Image */}
      <View style={styles.postImageContainer}>
        <Image source={data.postImage} style={styles.postImage} />
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.1,
  },
  postHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  postHeaderAuthorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeaderPersonImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postHeaderAuthorNameContainer: {
    paddingLeft: 5,
  },
  postHeaderAuthorText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  postHeaderMoreButton: {
    fontSize: 20,
  },
  // Post Image
  postImageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
});
