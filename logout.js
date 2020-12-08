var btnLogout = document.getElementById('btn-logout');
var usuario = document.getElementById('text-user');

 btnLogout.addEventListener('click', function(){
    firebase.auth().signOut().
    then(function() {
      alert("Usuario desconectado!");
      window.location.replace('index.html');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
   })

function getUser(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      usuario.innerHTML = user.email;
    } else {
        
    }
  });
}

window.onload = function(){
    getUser();
}
