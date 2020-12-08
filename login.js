 var btnSignIn = document.getElementById('btn-signin');
 var btnSignUp = document.getElementById('btn-signup');

 var email_in = document.getElementById('Username_in');
 var senha_in = document.getElementById('Password_in');
 var email_up = document.getElementById('Email_up');
 var senha_up = document.getElementById('Password_up');
 

 btnSignIn.addEventListener('click', function(){
    firebase.auth().signInWithEmailAndPassword(email_in.value, senha_in.value)
  .then((user) => {
    // Signed in
    // ...
    alert("Usuario conectado!");
    window.location.replace('main.html');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
 });


 btnSignUp.addEventListener('click', function(){
    firebase.auth().createUserWithEmailAndPassword(email_up.value, senha_up.value)
    .then((user) => {
      // Signed in
      // ...
      alert("Usuario cadastrado!");
      window.location.replace('main.html');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert(errorMessage);

    });
 })

