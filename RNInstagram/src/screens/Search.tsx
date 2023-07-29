import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState} from 'react';

import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';

import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {getStatusBarHeight} from 'react-native-status-bar-height';
const statusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight() : 0;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log('windowWidth>>', windowWidth, windowHeight);

const Search = () => {
  const [image, setImage] = useState<ImageSourcePropType | null>(null);

  const getData = (data: any) => {
    setImage(data);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />
        <SearchContent data={getData} />
      </ScrollView>
      {/* Img Modal */}
      {image ? (
        <View style={styles.modalContainer}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View style={styles.modalWrapper}>
            <View style={styles.imgOwnerInfoWrapper}>
              <Image source={image} style={styles.imgOwnerProfile} />
              <View style={styles.friendIdWrapper}>
                <Text style={styles.friendIdText}>친구 아이디</Text>
              </View>
            </View>
            {/*  */}
            <Image source={image} style={styles.modalMainWrapper} />
            <View style={styles.modalActionsWrapper}>
              <Ionic name="heart-outline" style={styles.modalActionIcon} />
              <Ionic
                name="person-circle-outline"
                style={styles.modalActionIcon}
              />
              <Feather name="navigation" style={styles.modalActionIcon} />
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  modalContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52,52,52, 0.8)',
    top: Platform.OS === 'ios' ? statusBarHeight : 0,
  },
  modalWrapper: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '90%',
    height: 465,
    borderRadius: 15,
    zIndex: 1,
    top: windowHeight / 6, // 화면 세로 방향의 중앙 위치에서부터
    left: windowWidth / 18, // 왼쪽으로 5% 이동한 위치에
  },
  imgOwnerInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imgOwnerProfile: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  friendIdWrapper: {
    paddingLeft: 8,
  },
  friendIdText: {
    fontSize: 12,
    fontWeight: '600',
  },
  //
  modalMainWrapper: {
    width: '100%',
    height: '80%',
  },
  modalActionsWrapper: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  modalActionIcon: {
    fontSize: 26,
  },
});
