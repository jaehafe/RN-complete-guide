import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const EditProfile = ({route, navigation}: any) => {
  const {name, accountName, profileImage} = route.params;

  return (
    <SafeAreaView style={styles.safeView}>
      {/*  */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>
        <Text style={styles.editProfileButtonText}>프로필 수정</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.confirmText}>완료</Text>
        </TouchableOpacity>
      </View>
      {/*  */}
      <View style={styles.profileImgContainer}>
        <Image source={profileImage} style={styles.profileImg} />
        <Text style={styles.profileImgChangeButtonText}>
          프로필 사진 바꾸기
        </Text>
      </View>
      {/*  */}
      <View style={styles.inputContainer}>
        {/* 이름 */}
        <View>
          <Text style={styles.textTitle}>이름</Text>
          <TextInput
            placeholder="이름"
            defaultValue={name}
            style={styles.textInput}
          />
        </View>
        {/* 사용자 이름 */}
        <View style={styles.paddingVertical10}>
          <Text style={styles.textTitle}>사용자 이름</Text>
          <TextInput
            placeholder="사용자 이름"
            defaultValue={accountName}
            style={styles.textInput}
          />
        </View>
        {/* 웹사이트 */}
        <View style={styles.paddingVertical10}>
          <Text style={styles.textTitle}>웹사이트</Text>
          <TextInput placeholder="웹사이트" style={styles.textInput} />
        </View>
        {/* 소개 */}
        <View style={styles.paddingVertical10}>
          <Text style={styles.textTitle}>소개</Text>
          <TextInput placeholder="웹사이트" style={styles.textInput} />
        </View>
      </View>
      {/*  */}
      <View>
        <Text style={styles.buttonText}>프로페셔널 계정으로 전환</Text>
        <Text style={styles.buttonText}>개인정보 설정</Text>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  safeView: {
    width: '100%',
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  editProfileButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmText: {
    color: '#3493D9',
  },
  //
  profileImgContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  profileImgChangeButtonText: {
    color: '#3493D9',
    marginTop: 10,
  },
  //
  inputContainer: {
    padding: 10,
  },
  textTitle: {
    opacity: 0.5,
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#CDCDCD',
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  buttonText: {
    marginVertical: 5,
    padding: 10,
    color: '#3493D9',
  },
});
