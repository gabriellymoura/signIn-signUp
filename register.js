// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCAhfS3U9ytA01njgIfApQ5zGBmJOkqWSI",
    authDomain: "signin-singup-9a290.firebaseapp.com",
    projectId: "signin-singup-9a290",
    storageBucket: "signin-singup-9a290.appspot.com",
    messagingSenderId: "992149310611",
    appId: "1:992149310611:web:56cf2402eaded0f1439166",
    measurementId: "G-ZC3ZK4BRKQ"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signup(){
    var email = document.getElementById("Email");
    var password = document.getElementById("Password");

    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise.catch(e => alert(e.message));
    alert("Cadastro efetuado com sucesso!")
}
