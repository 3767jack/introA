function Button1() {
var firstName = prompt("Please enter your first name");
	//AND
	var lastName = prompt("Please enter your last name");
	//First change this to ask for the user their favorite whatever.
	console.log("Name: " + firstName + " " + lastName )
	//Logs both firstName and lastName variables
	var lastLine = prompt("What do you like to do?")
	alert("Glad to meet you, " + firstName + " " + lastName + "!" + " " +  "The chat was successful. :) " + "I also like to " + lastLine + "!");

	alert("Test finished. Please rate the chat :)")
	var Opinion = prompt("What do you rate the chat?")
	console.log("Rating: " + Opinion)

	alert("Finished. Check console log for rating.")
}
