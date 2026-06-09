import { initializeApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDKNShY5dNq7qlN5dflhdNFLbmKqrJYOUY',
  authDomain: 'galeranchfin.firebaseapp.com',
  projectId: 'galeranchfin',
  storageBucket: 'galeranchfin.firebasestorage.app',
  messagingSenderId: '979207983468',
  appId: '1:979207983468:web:8fb6821e442022c71aa349',
  measurementId: 'G-S09V9LCF0B',
}

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
