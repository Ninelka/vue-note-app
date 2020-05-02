import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhdlbyQlDh7GxJH2XPk7JyCeDuonVQJ30",
    authDomain: "vue-note-app-82a49.firebaseapp.com",
    databaseURL: "https://vue-note-app-82a49.firebaseio.com",
    projectId: "vue-note-app-82a49",
    storageBucket: "vue-note-app-82a49.appspot.com",
    messagingSenderId: "1035275683407",
    appId: "1:1035275683407:web:ae367fd8ee672ef45b4c3a",
    measurementId: "G-DZQFVFGDM4"
};

export const fireApp = firebase.initializeApp(config);