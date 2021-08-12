
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB5IGFenHI8IgpAy7q5lmrXFFYBnVYL_fw",
      authDomain: "kwitter-6551f.firebaseapp.com",
      projectId: "kwitter-6551f",
      storageBucket: "kwitter-6551f.appspot.com",
      messagingSenderId: "209892166209",
      appId: "1:209892166209:web:9335e464ccf150dcbb94c0",
      measurementId: "G-6XJ0KPVEHZ"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom()
    {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "room name"
    });
    localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', 
function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "kwitter.html"; }
