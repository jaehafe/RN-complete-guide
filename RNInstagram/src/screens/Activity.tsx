import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import ActivityThisWeek from '../components/ActivityThisWeek';

import {FriendsProfileData, IFriendsProfileData} from '../db';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityRecommend from '../components/ActivityRecommend';

const Activity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>활동</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {/* ActivityThisWeek */}
        <ActivityThisWeek />
        {/* ActivityPrevious */}
        <Text style={styles.previousActivityText}>이전 활동</Text>
        {FriendsProfileData.slice(3, 6).map(
          (data: IFriendsProfileData, index) => (
            <ActivityPrevious data={data} key={index} />
          ),
        )}
        {/* ActivityRecommend */}
        <Text style={styles.activityRecommendText}>회원님을 위한 추천</Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => (
          <ActivityRecommend data={data} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    width: '200%',
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DEDEDE',
    padding: 10,
  },
  scrollView: {
    margin: 10,
  },
  previousActivityText: {
    fontWeight: 'bold',
  },
  activityRecommendText: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
