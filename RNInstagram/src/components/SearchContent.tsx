import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const searchData = [
  {
    id: 0,
    images: [
      require('../../assets/images/post1.jpeg'),
      require('../../assets/images/post2.jpeg'),
      require('../../assets/images/post3.jpeg'),
      require('../../assets/images/post4.jpeg'),
      require('../../assets/images/post5.jpeg'),
      require('../../assets/images/post6.jpeg'),
    ],
  },
  {
    id: 1,
    images: [
      require('../../assets/images/post7.jpeg'),
      require('../../assets/images/post8.jpeg'),
      require('../../assets/images/post9.jpeg'),
      require('../../assets/images/post10.jpeg'),
      require('../../assets/images/post11.jpeg'),
      require('../../assets/images/post12.jpeg'),
    ],
  },
  {
    id: 2,
    images: [
      require('../../assets/images/post13.jpeg'),
      require('../../assets/images/post14.jpeg'),
      require('../../assets/images/post15.jpeg'),
    ],
  },
];

const SearchContent = (props: any) => {
  console.log('props>>', props);

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {/*  */}
            {data.id === 0 ? (
              <View style={styles.searchData0Wrapper}>
                {data.images.map((imgData, imgIdx) => {
                  return (
                    <TouchableOpacity
                      key={imgIdx}
                      onPressIn={() => props.data(imgData)}
                      onPressOut={() => props.data(null)}
                      style={styles.img0TouchWrapper}>
                      <Image source={imgData} style={styles.img} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {/*  */}
            {data.id === 1 ? (
              <View style={styles.searchData1Container}>
                <View style={styles.searchData1Wrapper}>
                  {data.images
                    .slice(0, 4)
                    .map((imgData: ImageSourcePropType, imgIdx: number) => {
                      return (
                        <TouchableOpacity
                          key={imgIdx}
                          onPressIn={() => props.data(imgData)}
                          onPressOut={() => props.data(null)}
                          style={styles.img1TouchWrapper}>
                          <Image source={imgData} style={styles.img} />
                        </TouchableOpacity>
                      );
                    })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={styles.img1TouchWrapper}>
                  <Image source={data.images[5]} style={styles.img1} />
                </TouchableOpacity>
              </View>
            ) : null}
            {/*  */}
            {data.id === 2 ? (
              <View style={styles.searchData1Container}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={styles.img2TouchWrapper}>
                  <Image source={data.images[2]} style={styles.img2} />
                </TouchableOpacity>
                <View style={styles.searchData2Wrapper}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={styles.img3TouchWrapper}>
                        <Image source={imageData} style={styles.img3} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  searchData0Wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  img0TouchWrapper: {
    paddingBottom: 2,
    width: '33%',
  },
  img: {
    width: '100%',
    height: 150,
  },
  // 2
  searchData1Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchData1Wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '66.5%',
    justifyContent: 'space-between',
  },
  img1TouchWrapper: {
    paddingBottom: 2,
    width: '49.5%',
  },
  img1: {
    width: '100%',
    height: 300,
  },
  // 3
  img2TouchWrapper: {
    paddingRight: 2,
    width: '66.5%',
  },
  searchData2Wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '33%',
    justifyContent: 'space-between',
  },
  img3TouchWrapper: {
    paddingBottom: 2,
    width: '100%',
  },
  img2: {
    width: '100%',
    height: 300,
  },
  img3: {
    width: '100%',
    height: 150,
  },
});
