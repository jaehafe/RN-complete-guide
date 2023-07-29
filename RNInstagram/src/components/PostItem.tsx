import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {IPostInfoData} from './Posts';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';

interface IPostItem {
  data: IPostInfoData;
}

const PostItem = ({data}: IPostItem) => {
  const [like, setLike] = useState(data.isLiked);

  console.log('like>>>', like);

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
      {/* Post Action */}
      <View style={styles.postActionContainer}>
        <View style={styles.postActionMain}>
          {/* like */}
          <TouchableOpacity onPress={() => setLike(!like)}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={[styles.postActionLike, {color: like ? 'red' : 'black'}]}
            />
          </TouchableOpacity>
          {/* chat */}
          <TouchableOpacity>
            <Ionic name="chatbubble-outline" style={styles.postActionChat} />
          </TouchableOpacity>
          {/* share */}
          <TouchableOpacity>
            <Feather name="navigation" style={styles.postActionShare} />
          </TouchableOpacity>
        </View>
        <Feather name="bookmark" style={styles.postActionBookmark} />
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
  // Post Action
  postActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  postActionMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionBookmark: {
    fontSize: 20,
  },
  postActionLike: {
    paddingRight: 10,
    fontSize: 20,
  },
  postActionChat: {
    paddingRight: 10,
    fontSize: 20,
  },
  postActionShare: {
    fontSize: 20,
  },
});
