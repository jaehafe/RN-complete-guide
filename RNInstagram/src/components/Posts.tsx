import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import PostItem from './PostItem';

export interface IPostInfoData {
  postAuthor: string;
  postPersonImage: ImageSourcePropType;
  postImage: ImageSourcePropType;
  likes: number;
  isLiked: boolean;
}

const postInfo = [
  {
    postAuthor: 'John',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
    isLiked: true,
  },
  {
    postAuthor: 'Tonny',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 345,
    isLiked: false,
  },
  {
    postAuthor: 'Tom',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 734,
    isLiked: false,
  },
  {
    postAuthor: 'React',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 875,
    isLiked: false,
  },
];

const Posts = () => {
  return (
    <View>
      {postInfo &&
        postInfo.map((data: IPostInfoData, index) => {
          return <PostItem key={index} data={data} />;
        })}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
