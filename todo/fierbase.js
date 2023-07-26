// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-R7tUMzPQr-kjgJMo6VqrrEDY4m5Wz4I',
  authDomain: 'rn-todo-2ce17.firebaseapp.com',
  projectId: 'rn-todo-2ce17',
  storageBucket: 'rn-todo-2ce17.appspot.com',
  messagingSenderId: '674421401676',
  appId: '1:674421401676:web:34e7d5e047e7671c7c6ce9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
