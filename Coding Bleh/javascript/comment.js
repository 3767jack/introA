function writeUserData() {
	var userId = firebase.auth().currentUser.uid;

  firebase.database().ref('comments/' + userId).set({
    author: userId,
    text: text,
    profile_picture : imageUrl
  });
}