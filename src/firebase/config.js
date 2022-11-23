// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.APIKEY_DB,
	authDomain: process.env.AUTHDOMAIN_DB,
	projectId: process.env.PROJECTID_DB,
	storageBucket: process.env.STORAGEBUCKET_DB,
	messagingSenderId: process.env.MESSAGINGSENDERID_DB,
	appId: process.env.APPID_DB,
};

// Initialize Firebase
initializeApp(firebaseConfig);
