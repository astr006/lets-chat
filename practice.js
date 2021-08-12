var firebaseConfig = {
    apiKey: "AIzaSyB5IGFenHI8IgpAy7q5lmrXFFYBnVYL_fw",
    authDomain: "kwitter-6551f.firebaseapp.com",
    projectId: "kwitter-6551f",
    storageBucket: "kwitter-6551f.appspot.com",
    messagingSenderId: "209892166209",
    appId: "1:209892166209:web:9335e464ccf150dcbb94c0",
    measurementId: "G-6XJ0KPVEHZ"
  };  firebase.initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS
function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}