import {ImageSourcePropType} from 'react-native';

export interface IFriendsProfileData {
  name: string;
  accountName: string;
  profileImage: ImageSourcePropType;
  posts: number | string;
  followers: number | string;
  following: number;
  follow: boolean;
}

// Friends Profile Data
export const FriendsProfileData: IFriendsProfileData[] = [
  {
    name: 'react',
    accountName: 'React',
    profileImage: require('../../assets/images/profile4.jpeg'),
    posts: 30,
    followers: 31,
    following: 44,
    follow: true,
  },
  {
    name: 'javascript',
    accountName: 'Javascript',
    profileImage: require('../../assets/images/profile5.jpeg'),
    posts: 24,
    followers: 120,
    following: 600,
    follow: false,
  },
  {
    name: 'vue',
    accountName: 'Vue',
    profileImage: require('../../assets/images/profile2.jpeg'),
    posts: 21,
    followers: 7886,
    following: 32,
    follow: true,
  },
  {
    name: 'angular',
    accountName: 'Angular',
    profileImage: require('../../assets/images/post1.jpeg'),
    posts: 123,
    followers: 64253,
    following: 32,
    follow: false,
  },
  {
    name: 'svelt',
    accountName: 'Svelt',
    profileImage: require('../../assets/images/post2.jpeg'),
    posts: 56,
    followers: 6542,
    following: 43,
    follow: true,
  },
  {
    name: 'go',
    accountName: 'Go',
    profileImage: require('../../assets/images/post3.jpeg'),
    posts: 452,
    followers: '564k',
    following: 31,
    follow: true,
  },
  {
    name: 'nextjs',
    accountName: 'NextJS',
    profileImage: require('../../assets/images/post4.jpeg'),
    posts: 543,
    followers: '435k',
    following: 22,
    follow: false,
  },
  {
    name: 'expressjs',
    accountName: 'ExpressJS',
    profileImage: require('../../assets/images/post5.jpeg'),
    posts: 234,
    followers: '763k',
    following: 332,
    follow: false,
  },
  {
    name: 'java',
    accountName: 'Java',
    profileImage: require('../../assets/images/post6.jpeg'),
    posts: 111,
    followers: 11223,
    following: 1,
    follow: true,
  },
  {
    name: 'deno',
    accountName: 'Deno',
    profileImage: require('../../assets/images/post7.jpeg'),
    posts: 121,
    followers: 43213,
    following: 21,
    follow: false,
  },
  {
    name: 'nodejs',
    accountName: 'NodeJS',
    profileImage: require('../../assets/images/post8.jpeg'),
    posts: 432,
    followers: '987k',
    following: 24,
    follow: false,
  },
  {
    name: 'python',
    accountName: 'Python',
    profileImage: require('../../assets/images/post9.jpeg'),
    posts: '1.2k',
    followers: '1.2M',
    following: 12,
    follow: false,
  },
  {
    name: 'jquery',
    accountName: 'JQuery',
    profileImage: require('../../assets/images/post10.jpeg'),
    posts: 533,
    followers: 64322,
    following: 123,
    follow: true,
  },
];
