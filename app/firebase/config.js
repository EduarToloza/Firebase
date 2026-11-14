
 // firebase/config.js
 import { Platform } from 'react-native';
 import { initializeApp } from 'firebase/app';
 import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
 import { getFirestore } from 'firebase/firestore';
 import AsyncStorage from '@react-native-async-storage/async-storage';

 // Pega aquí el objeto que te da la consola de Firebase
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA99PVAcX3xSK_1vbPRgiBHNY6kUQNCEKU",
  authDomain: "fir-uniagustiniana.firebaseapp.com",
  projectId: "fir-uniagustiniana",
  storageBucket: "fir-uniagustiniana.firebasestorage.app",
  messagingSenderId: "731671793720",
  appId: "1:731671793720:web:3ea86051b72d9ec1da16cd",
  measurementId: "G-8LW1NH7DL9"
};

 const app = initializeApp(firebaseConfig);

 // En el celular la sesión se guarda con AsyncStorage para no pedir
 // el login cada vez que abres la app. En el navegador basta getAuth.
 export const auth = Platform.OS === 'web'
   ? getAuth(app)
   : initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });

 export const db = getFirestore(app);
