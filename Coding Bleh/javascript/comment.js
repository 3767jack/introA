function writeUserData() {
	var userId = firebase.auth().currentUser.uid;
	var text = document.getElementById('commentSub')
  firebase.database().ref('comments/' + userId).set({
    author: userId,
    text: text,
  });
}