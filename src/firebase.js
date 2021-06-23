import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCmyAfCo9m3eBweAawec0RbkU4oIFUUuwg",
  authDomain: "site1-a39fe.firebaseapp.com",
  projectId: "site1-a39fe",
  storageBucket: "site1-a39fe.appspot.com",
  messagingSenderId: "67958208203",
  appId: "1:67958208203:web:903322a0c659fbd0f4cd4e",
  measurementId: "G-FN74QSZHQG",
});

export const auth = app.auth();
export default app;
