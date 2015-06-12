//First we add the event listener to the window when it loads
window.addEventListener("load", buttonSetup, false);

function buttonSetup() {
	//here is our setup function, we are listening for when the form submits
	var form = document.getElementById('messageForm');
	//we validate the form whenever it submits
	form.onsubmit = validate;
};

function validate(event) {
	//grab all the relevant fields of the form
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var subject = document.getElementById('subject');
	var message = document.getElementById('message');
	
	//grab all the images relating to error
	var nameLabel = document.getElementById('nameLabel');
	var emailLabel = document.getElementById('emailLabel');
	var subjectLabel = document.getElementById('subjectLabel');
	var messageLabel = document.getElementById('messageLabel');

	//if a field is blank, display the image and shrink the width of the input field.
	if (name.value == "") {
		//display image
		nameLabel.style.display = "inline";
		//shrink field
		name.style.width = "364px";
		//prevent submission
		event.preventDefault();
	} else {
		//we reset the styling of the error div if there's no error.
		nameLabel.style.display = "none";
		name.style.width = "394px";
	}
	
	if (email.value == "") {
		emailLabel.style.display = "inline";
		email.style.width = "364px";
		event.preventDefault();
	} else {
		emailLabel.style.display = "none";
		email.style.width = "394px";
	}

	if (subject.value == "") {
		subjectLabel.style.display = "inline";
		subject.style.width = "364px";
		event.preventDefault();
	} else {
		subjectLabel.style.display = "none";
		subject.style.width = "394px";
	}

	if (message.value == "") {
		messageLabel.style.display = "inline";
		message.style.width = "364px";
		event.preventDefault();
	} else {
		messageLabel.style.display = "none";
		message.style.width = "394px";
	}
}