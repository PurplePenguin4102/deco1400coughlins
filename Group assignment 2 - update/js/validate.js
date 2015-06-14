// prototype defaults
var window;
var document;

// prototype functions
var buttonSetup, validate;

// First we add the event listener to the window when it loads
window.addEventListener("load", buttonSetup, false);

function buttonSetup() {
    "use strict";
    // here is our setup function, we are listening for when the form submits
    var form = document.getElementById('messageForm');
    // we validate the form whenever it submits
    form.onsubmit = validate;
}

function validate(event) {
    // prototype variables
    "use strict";
    var name, email, subject, message, nameLabel,
        emailLabel, subjectLabel, messageLabel;
    // grab all the relevant fields of the form
    name = document.getElementById('name');
    email = document.getElementById('email');
    subject = document.getElementById('subject');
    message = document.getElementById('message');

    // grab all the images relating to error
    nameLabel = document.getElementById('nameLabel');
    emailLabel = document.getElementById('emailLabel');
    subjectLabel = document.getElementById('subjectLabel');
    messageLabel = document.getElementById('messageLabel');

    // if a field is blank, display the image and shrink the width of the input field.
    if (name.value === "") {
        // display image
        nameLabel.style.display = "inline";
        // shrink field
        name.style.width = "364px";
        // prevent submission
        event.preventDefault();
    } else {
        // we reset the styling of the error div if there's no error.
        nameLabel.style.display = "none";
        name.style.width = "394px";
    }

    // the rest of this code is the same statement above except names are changed
    if (email.value === "") {
        emailLabel.style.display = "inline";
        email.style.width = "364px";
        event.preventDefault();
    } else {
        emailLabel.style.display = "none";
        email.style.width = "394px";
    }

    if (subject.value === "") {
        subjectLabel.style.display = "inline";
        subject.style.width = "364px";
        event.preventDefault();
    } else {
        subjectLabel.style.display = "none";
        subject.style.width = "394px";
    }

    if (message.value === "") {
        messageLabel.style.display = "inline";
        message.style.width = "362px";
        event.preventDefault();
    } else {
        messageLabel.style.display = "none";
        message.style.width = "392px";
    }
}