var firebaseConfig = {
      apiKey: "AIzaSyCmZxQRqb3HRMUxov85vGf2sN5al2MLrNU",
      authDomain: "kwitter-edd71.firebaseapp.com",
      databaseURL: "https://kwitter-edd71-default-rtdb.firebaseio.com",
      projectId: "kwitter-edd71",
      storageBucket: "kwitter-edd71.appspot.com",
      messagingSenderId: "416074139861",
      appId: "1:416074139861:web:a7a076b7429874c4a1ba5c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name"); 


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = ""; 
}