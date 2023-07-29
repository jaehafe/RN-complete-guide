import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import Entypo from 'react-native-vector-icons/Entypo';

const storyInfo = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'john',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 3,
    name: 'tonny',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'daniel',
    image: require('../../assets/images/profile3.jpeg'),
  },
  ,
  {
    id: 5,
    name: 'sojeong',
    image: require('../../assets/images/profile4.jpeg'),
  },
  ,
  {
    id: 6,
    name: 'jaeha',
    image: require('../../assets/images/profile5.jpeg'),
  },
];

const Stories = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      {storyInfo?.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data?.name,
                image: data?.image,
              })
            }>
            <View style={styles.statusContainer}>
              {data?.id == 1 ? (
                <View style={styles.myStoryPlusIconContainer}>
                  <Entypo
                    name="circle-with-plus"
                    style={styles.myStoryPlusIcon}
                  />
                </View>
              ) : null}
              <View style={styles.storyCircleBorder}>
                <Image source={data?.image} style={styles.storyCircleImage} />
              </View>
              <Text
                style={[
                  styles.storyNameText,
                  data?.id === 0 ? styles.storyNameHighlightedText : null,
                ]}>
                {data?.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
  },
  statusContainer: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    position: 'relative',
  },
  myStoryPlusIconContainer: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    zIndex: 1,
  },
  myStoryPlusIcon: {
    fontSize: 20,
    color: '#405de6',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  storyCircleBorder: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyCircleImage: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  storyNameText: {
    textAlign: 'center',
    fontSize: 10,
    opacity: 0.5,
  },
  storyNameHighlightedText: {
    opacity: 1,
  },
});
