import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import 'firebase/auth';
// import firebase from 'firebase/app';


// import thunk from 'react-thunk'

const firebaseConfig = {
  apiKey: "AIzaSyANaAA-LGfH4otzrbvZrdHbI-jx2Rm-qi8",
  authDomain: "reackt-b6c98.firebaseapp.com",
  databaseURL: "https://reackt-b6c98.firebaseio.com",
  projectId: "reackt-b6c98",
  storageBucket: "reackt-b6c98.appspot.com",
  messagingSenderId: "729150194757",
  appId: "1:729150194757:web:81877a6d05b6ecfea7cf2c",
  measurementId: "G-ET2FL9PDF7"
};
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'Users',
};
// Init firebase instance

 firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Init firestore
//  const firestore = firebase.firestore();
// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
// Create initial state
const initialState = { };
// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store ;