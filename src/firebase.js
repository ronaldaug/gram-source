export const firebase = require('firebase/app');

require("firebase/auth");
require("firebase/database");

// Initialize Firebase
var config = {
   // Firebase keys goes here
};
firebase.initializeApp(config);
export const fb = firebase;
export const auth = fb.auth();
export const db = fb.database()
export const user_db = db.ref('users');
export const feedback_db = db.ref('feedbacks');
export const template_db = db.ref('templates');
