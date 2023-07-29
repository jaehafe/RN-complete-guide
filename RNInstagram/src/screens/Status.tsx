import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Animated,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

import {getStatusBarHeight} from 'react-native-status-bar-height';
const statusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight() : 0;

import Ionic from 'react-native-vector-icons/Ionicons';

const Status = ({route, navigation}: any) => {
  const {name, image} = route.params;
  console.log('name>>', name);
  console.log('image>>', image);

  const progress = useRef(new Animated.Value(0)).current;
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5], // progress의 입력 범위
    outputRange: ['0%', '100%'], // progress에 대응하는 출력 범위
  });

  console.log('progressAnimation', progressAnimation);
  console.log('statusBarHeight>>>', statusBarHeight);

  // 5초 후 돌아가기
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // progress bar 5초
  useEffect(() => {
    Animated.timing(progress, {
      // Will change progress value to 5 in 5 seconds
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.durationStatus}>
        <Animated.View
          style={[styles.animatedView, {width: progressAnimation}]}
        />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.userAvatar}>
          <Image source={image} style={styles.userAvatarImage} />
        </View>
        <View style={styles.storyMainImage}>
          <Text style={styles.userNameText}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close" style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={styles.storyImage} />
      <View style={styles.absolute} />
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
  },
  durationStatus: {
    // marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
    marginTop: statusBarHeight,
    height: 3,
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
  },
  animatedView: {
    height: '100%',
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%',
  },
  userAvatar: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userNameText: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 10,
  },
  closeIcon: {
    fontSize: 20,
    color: 'white',
    opacity: 0.6,
  },
  storyImage: {
    position: 'absolute',
    width: '100%',
    height: 600,
  },
  absolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    width: '100%',
  },
  userAvatarImage: {
    borderRadius: 100,
    backgroundColor: 'orange',
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
  },
  storyMainImage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
});
