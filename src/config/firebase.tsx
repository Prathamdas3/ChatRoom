import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB1VUNk7ghe_Y84P-DRNdS3_EcmRSAzLV0',
  authDomain: 'chatroom-66bd8.firebaseapp.com',
  projectId: 'chatroom-66bd8',
  storageBucket: 'chatroom-66bd8.appspot.com',
  messagingSenderId: '174770146427',
  appId: '1:174770146427:web:2ef593258fde92324526de',
  measurementId: 'G-WQPRT6DQ3Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
