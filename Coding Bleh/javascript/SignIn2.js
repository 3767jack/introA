firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    getElementById('welcomeText2').innerHTML = ("Hello, " + user.displayName + "! " + "Your feed will show up here.")
  } else {
    // No user is signed in.
  }
});