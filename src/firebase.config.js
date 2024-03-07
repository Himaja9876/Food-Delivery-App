import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBngLXHmuiEIC80b2lkGVqB1ckZkX1TnFk",
  authDomain: "fooddeliveryapp-52b33.firebaseapp.com",
  databaseURL: "https://fooddeliveryapp-52b33-default-rtdb.firebaseio.com",
  projectId: "fooddeliveryapp-52b33",
  storageBucket: "fooddeliveryapp-52b33.appspot.com",
  messagingSenderId: "753572717080",
  appId: "1:753572717080:web:f75db255715e81f339996d"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);  //it gets initialized everytime if the page is refreshed

const firestore = getFirestore(app);  //get db with the app - storing, syncing, and querying structured data(user data,app state)
const storage = getStorage(app);      //get storage with the app - file storage and retrievel(user uploads)

export { app, firestore, storage };